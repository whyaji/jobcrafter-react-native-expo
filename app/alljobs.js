import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { Stack } from "expo-router";
import {
    Listjobs
} from "../components";

import { COLORS, images, SIZES } from "../constants";

const Alljobs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: "Show All Jobs",
            headerTitleAlign: 'center'
        }}
        />

        <ScrollView>
          <Listjobs />
        </ScrollView>
    </SafeAreaView>
    
  )
}

export default Alljobs