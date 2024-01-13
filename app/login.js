import { SafeAreaView} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Formlogin } from '../components';

import { COLORS} from "../constants";


const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerTitle: 'Login',
          headerTitleAlign: 'center',
        }}
      />

      <Formlogin />
    </SafeAreaView>
  );
};

export default Login;
