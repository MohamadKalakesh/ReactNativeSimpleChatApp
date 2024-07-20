import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "../../context/authContext";

export default function Home() {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  console.log(user);

  return (
    <View>
      <Text>Hello {user.username}</Text>
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
}
