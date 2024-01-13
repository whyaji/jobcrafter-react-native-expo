import React from 'react'
import { SafeAreaView } from 'react-native'
import { Stack } from "expo-router";
import {
    Bio,
    Projects
} from "../components";

import { COLORS, images, SIZES } from "../constants";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: "Profile",
            headerTitleAlign: 'center'
        }}
        />

        <Bio />
        <Projects />
    </SafeAreaView>
    
  )
}

export default Profile