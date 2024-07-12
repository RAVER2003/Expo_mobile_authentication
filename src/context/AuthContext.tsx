import { Children, createContext, useEffect } from "react";
export const AuthContext = createContext(null);
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
const Token_Key = "my-jwt";
export const API_url = "https://api.developbetterapps.com/";
export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });
  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(Token_Key);
      console.log(token);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setAuthState({ token: token, authenticated: true });
      }
    };
    loadToken();
  }, []);

  const Register = async (email: string, password: string) => {
    try {
      return await axios.post(`${API_url}users`,{email:email, password:password });;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const Login = async (email: string, password: string) => {
    try {
      const result = await axios.post(`${API_url}auth`, { email, password });
      setAuthState({ token: result.data.token, authenticated: true });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(Token_Key, result.data.token);
      return result;
    } catch (e) {
      return { error: true, msg: (e as any).response.data.msg };
    }
  };

  const Logout = async () => {
    await SecureStore.deleteItemAsync(Token_Key);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({ token: null, authenticated: null });
  };
  return (
    <AuthContext.Provider value={{ Login, Logout, Register, authState }}>
      {children}
    </AuthContext.Provider>
  );
};
