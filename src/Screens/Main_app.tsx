import React, { useContext } from "react";
import { View, Text } from "react-native";
import CustomButton from "@/components/CustomButton";
import { AuthContext } from "@/context/AuthContext";
const Main_app = () => {
  const {Logout,authState}=useContext(AuthContext);
  const getCurrentGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const greeting = getCurrentGreeting();
  return (
    <View className="flex w-full justify-center items-center h-full">
      <Text className="mb-5">{greeting} {authState.user_name}</Text>
      <CustomButton label={"Logout"} onPress={Logout} />
    </View>
  );
};

export default Main_app;
