import { useState } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import { getAuth, sendPasswordResetEmail} from "firebase/auth";
import { auth } from '../config/firebase';
  
  export default function Forgot({navigation}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const GoToMenu = (() =>{

      sendPasswordResetEmail(auth, email)
        .then((userCredential) => {
          // Signed in 
          alert("Check email")
          navigation.navigate('LogIn')
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      })


    return (
      <View>
        <View>
          <View>
            <Text style={styles.Forgot}> Forgot Password </Text>
            <View>
              <Text style={styles.Text}>
                {' '}
                Enter your email, we will send you a 6 digit verification code{' '}
              </Text>
            </View>
             <View>
          <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
          </View>
          </View>
           <View>
            <TouchableOpacity onPress={GoToMenu} style={styles.btn}>
              <Text style={styles.ComfirmText}>Comfirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    Forgot: {
      marginLeft: 50,
      marginTop: 30,
      fontSize: 24,
    },
  
    Text: {
      marginLeft: 50,
      marginTop: 20,
      fontSize: 16,
    },
  
    Img1: {
      width: 26,
      height:24
    },
  
    input: {
      textAlign: 'center',
      backgroundColor: 'gold',
      borderRadius: 10,
      width: 280,
      marginLeft: 40,
      marginTop: 50,
      height:95,
    },
  
    ComfirmText: {
      textAlign: 'center',
      backgroundColor: 'gold',
      borderRadius: 10,
      width: 280,
      marginLeft: 40,
      marginTop: 150,
      height: 51,
      paddingTop: 15
    }
  });
  