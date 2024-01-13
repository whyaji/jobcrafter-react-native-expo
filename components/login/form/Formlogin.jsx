import { useState} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useRouter } from 'expo-router';

import styles from './formlogin.style';

import { images } from '../../../constants';

const Formlogin = () => {
  const router = useRouter();
  const [emailTerm, setEmailTerm] = useState('');
  const [passwordTerm, setPasswordTerm] = useState('');

  const [show] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Image style={styles.loginPicture} source={images.story} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <FloatingLabelInput label={'Email'} style={styles.formInput} value={emailTerm} onChangeText={(text) => setEmailTerm(text)} />
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formWrapper}>
          <FloatingLabelInput
            label={'Password'}
            isPassword
            togglePassword={show}
            style={styles.formInput}
            value={passwordTerm}
            onChangeText={(value) => setPasswordTerm(value)}
            customShowPasswordComponent={<Text>Show</Text>}
            customHidePasswordComponent={<Text>Hide</Text>}
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.formBtn} onPress={() => router.push('home')}>
          <Text style={styles.formBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
          <Text style={styles.contextText}>New to JobCrafter? </Text>
          <TouchableOpacity>
            <Text style={styles.contextTextColor}>Create an account</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default Formlogin;
