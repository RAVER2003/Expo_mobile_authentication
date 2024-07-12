import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const google = require("./../../assets/google.png");
const twitter = require("./../../assets/twitter.png");
const facebook = require("./../../assets/facebook.png");
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Email } from '@mui/icons-material';
const social_buttons = [
  { name: "google", url: google },
  { name: "facebook", url: twitter },
  { name: "twitter", url: facebook },
];
const LoginScreen = ({navigation}) => {
const {Login} = useContext(AuthContext);
const [mobile_number,setMobile] = useState();
const [password,setpassword] = useState();
  return (
    <SafeAreaView className="flex flex-grow ">
  <View className="flex flex-col space-y-9  items-center justify-center p-5 h-full w-full">
        
        <Text className="text-4xl  font-medium text-[#333] mb-10">Login</Text>

        <InputField
          label={"Mobile Number"}
          icon={
            <MaterialIcons
              name="local-phone"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="phone-pad"
          value={mobile_number}
          OnchangeText = {text=>setMobile(text)}
        />

<InputField
          label={'Password'}
          icon={
            <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          value={password}
          OnchangeText = {text=>setpassword(text)}
        />
        
        <CustomButton label={"Login"} onPress={async ()=>{const result = await Login(mobile_number,password)
          if(result.error){
            alert(result.msg)
          }
          else{
            alert(result.msg);
          }
        }} />

        <Text className="text-center text-[#666]">
          Or, login with ...
        </Text>

        <View className="flex flex-row gap-2 mt">
          {social_buttons.map((item) => (
            <TouchableOpacity
            key={item.name}
              onPress={() => {}}
              className="border-2 rounded-xl px-8 py-3 border-[#ddd]"
            >
              <Image
            source={item.url}
            alt=""
           className="h-6 w-6"
            height={30}
            width={30}
          />
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
