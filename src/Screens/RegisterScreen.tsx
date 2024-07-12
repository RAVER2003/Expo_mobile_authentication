import React, { useContext, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import DatePicker from 'react-native-date-picker';
const google = require("./../../assets/google.png");
const twitter = require("./../../assets/twitter.png");
const facebook = require("./../../assets/facebook.png");
import InputField from "@/components/InputField";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import CustomButton from "@/components/CustomButton";
import { AuthContext } from "@/context/AuthContext";
const social_buttons = [
  { name: "google", url: google },
  { name: "facebook", url: twitter },
  { name: "twitter", url: facebook },
];

const RegisterScreen = ({ navigation }) => {
const [full_name,setFullName] = useState();
const [password,setpassword] = useState();
const [confirmpassword,setconfirmpassword] = useState();
const [email,setemail] = useState();
const {Register}=useContext(AuthContext);
  return (
    <SafeAreaView className="flex flex-grow ">
      <View className="flex flex-col space-y-9  items-center justify-center p-5 h-full w-full">
        <Text className="text-4xl  font-medium text-[#333]">Register</Text>

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

        <Text className="text-center text-[#666] mb-8">
          Or, register with email ...
        </Text>

        <InputField
          label={"Full Name"}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          value ={full_name}
          OnchangeText = {text =>setFullName(text)}
        />

        <InputField
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          value={email}
          OnchangeText = {text=>setemail(text)}
        />

        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="lock-open-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={password}
          OnchangeText = {text=>setpassword(text)}
        />

        <InputField
          label={"Confirm Password"}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          value={confirmpassword}
          OnchangeText = {text=>setconfirmpassword(text)}
        />

        <CustomButton label={"Register"} onPress={async() => {if(confirmpassword===password){
          console.log(email,password)
          const result = await Register(email,password);
          if(result && result.error){
            console.log("error")
            alert(result.error);
          }
          else{
            alert("Registration successfull!, please login");
            navigation.goBack();
          }
        }else{
          alert("password not same");
        }}} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#AD40AF", fontWeight: "700" }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
