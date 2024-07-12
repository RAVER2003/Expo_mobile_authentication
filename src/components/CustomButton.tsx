import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ label, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#AD40AF] p-5 rounded-xl"
    >
      <Text className="text-center font-bold text-base text-white">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
