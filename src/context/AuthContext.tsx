import { Children, createContext, useEffect } from "react";
export const AuthContext = createContext(null);
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
const Token_Key = "my-jwt";
const User_Name_Key ="my-username"; 
export const API_url = "http://192.168.248.40:3003/api/auth/";
export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
    user_name:null
  });
  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(Token_Key);
      const full_name = await SecureStore.getItemAsync(User_Name_Key);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setAuthState({ token: token, authenticated: true ,user_name:full_name});
      }
    };
    loadToken();
  }, []);

  const Register = async (firstName:string,lastName:string,mobile_number: string, password: string) => {
    console.log(firstName,lastName,mobile_number,password);
    try {
      const result = await axios.post(`${API_url}register`,{first_name:firstName,last_name:lastName,mobile_number:mobile_number, password:password });
      return result.data;
    } catch (e) {
      return { msg:"unable to send request",error: true};
    }
  };

  const Login = async (mobile_number: string, password: string) => {
    try {
      const result = await axios.post(`${API_url}login`, { mobile_number, password });
  
      setAuthState({ token: result.data.token, authenticated: true,user_name:result.data.full_name });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(Token_Key, result.data.token);
      await SecureStore.setItemAsync(User_Name_Key, result.data.full_name);
      return result.data;
    } catch (e) {
      return { error: true, msg:"unable to send request" };
    }
  };

  const Logout = async () => {
    await SecureStore.deleteItemAsync(Token_Key);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({ token: null, authenticated: null,user_name:null });
  };
  return (
    <AuthContext.Provider value={{ Login, Logout, Register, authState }}>
      {children}
    </AuthContext.Provider>
  );
};
