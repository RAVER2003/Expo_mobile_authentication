import React, { useContext } from "react";
import { View, Text } from "react-native";
import CustomButton from "@/components/CustomButton";
import { AuthContext } from "@/context/AuthContext";
const Main_app = () => {
  const {Logout}=useContext(AuthContext);
  return (
    <View className="flex w-full justify-center items-center h-full">
      <Text className="mb-5">Hello this is the APP</Text>
      <CustomButton label={"Logout"} onPress={Logout} />
    </View>
  );
};

export default Main_app;
