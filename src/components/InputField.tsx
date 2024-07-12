import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  OnchangeText
}: any) {
  return (
    <View className="flex flex-row  border-b-[1px] border-[#ccc] mb-6 pb-2">
      {icon}
      
        <TextInput
          className="flex-grow py-0"
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
          value={value}
          onChangeText={OnchangeText}
        />
      
    </View>
  );
}
