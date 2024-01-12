import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    CheckBox,
  } from 'react-native';
  import React, {useState} from 'react';
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from '../config/firebase';


  export default function Login({ navigation }) {
    const [isSelected, setSelection] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const validateEmail = () => {
      setEmailError('');
      if (!email) {
        setEmailError('Please enter your email.');
      } else if (!isValidEmail(email)) {
        setEmailError('Please enter a valid email address.');
      }
    };
  
    const validatePassword = () => {
      setPasswordError('');
      if (!password) {
        setPasswordError('Please enter your password.');
      } else if (password.length < 6) {
        setPasswordError('Password must be at least 6 characters long.');
      }
    };
  
    const isValidEmail = (value) => {
      // Your email validation logic (use regex or any other method)
      // Example:
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };
  
    const GoToMenu = () => {
      validateEmail();
      validatePassword();
  
      if (emailError || passwordError) {
        return; // Stop the function if there are validation errors
      }
  
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          alert('Successfully Logged In');
          navigation.navigate('Menu');
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(`Login failed: ${errorMessage}`);
        });
    };
  
    
    return (
      <View style={styles.mainContainer}>
        <View>
          <Image
            style={styles.Img}
            source={require('../assets/label-round-restaurant-food-sign-drawing.png')}
          />
        </View>
         <Text style={styles.header}>LOG IN</Text>
        <View>
        <TextInput
        style={styles.input1}
        onChangeText={(text) => setEmail(text)}
        onBlur={validateEmail}
        placeholder="Email"
      />
      <Text style={styles.errorText}>{emailError}</Text>
      <TextInput
        style={styles.input2}
        onChangeText={(text) => setPassword(text)}
        onBlur={validatePassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Text style={styles.errorText}>{passwordError}</Text>
        </View>
  
        <View style={styles.box}>
        <View >

        <TouchableOpacity>
           <Text style={styles.Remember}onPress={() => navigation.navigate('Forgot')} > ForgotPassword </Text>
           </TouchableOpacity>
          <View>
            <TouchableOpacity onPress={GoToMenu} style={styles.btn}>
              <Text
                style={styles.LoginText}
                >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        
          <View >
     
           </View>
          
           <View>
            <TouchableOpacity onPress={() => navigation.navigate('Sign up')} style={styles.btn}>
              <Text style={styles.SignText}>CREATE AN ACCOUNT?</Text>
            </TouchableOpacity>
          </View></View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({

    mainContainer: {
      flex:7,
     justifyContent:'center',
     
    },

    Img: {
      width: 200,
      height: 200,
      borderRadius: 9,
      alignSelf:'center',
    },

    header: {
     fontSize:30,
     textAlign:'center',

    },
  
    input1: {
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: 'silver',
      width: 250,
      height: 50,
      marginTop: 20,
    },
  
    input2: {
      alignSelf: 'center',
      textAlign: 'center',
      backgroundColor: 'silver',
      width: 250,
      height: 50,
      marginTop: 5,
    },
  
    errorText: {
      color: 'red',
      marginTop: 5,
      marginBottom: 10,
      textAlign: 'center',
    },
  
    LoginText: {
      alignSelf:'center',
      textAlign: 'center',
      backgroundColor: 'gold',
      borderRadius: 10,
      width: 150,
      marginTop: 10,
      height: 30,
      paddingTop:9,
      fontWeight:800,
      fontSize:18,
      color:'black',
      height:45
    },

    Remember: {
      alignSelf: 'center',
      marginBottom:9,
      marginTop:-15,
      fontWeight:700

    },
  
    SignText: {
      alignSelf:'center',
      borderRadius: 10,
      width: 150,
      marginTop: 15,
      height: 30,
      paddingTop:5,
      fontWeight:700,
      fontSize:12,
      
      
  
    },
    box: {
      padding: 20
    },
    
    checkbox: {
      alignSelf: 'center',
    },
  });    