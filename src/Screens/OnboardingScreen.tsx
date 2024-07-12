import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Logo = require("./../../assets/logo.png");
const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="flex justify-center items-center flex-grow">
      <View className="bg-black w-full h-full justify-center items-center">
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={Logo}
            alt=""
            className="h-200 w-auto"
            height={30}
            width={30}
          />
        </View>
        <TouchableOpacity
          className="flex flex-row gap-1 bg-[#AD40AF] p-5 w-[90%] rounded-xl mb-14 justify-center items-center "
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-white text-lg font-bold">Let's Begin</Text>
          <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
