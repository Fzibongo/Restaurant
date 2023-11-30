import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { useState } from 'react';


export default function Sign({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const GoToMenu = (() => {

 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        alert("Created Successfully")
        navigation.navigate('LogIn')
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  })

  return (
    <View>
       <View>
          <Image
            style={styles.Img}
            source={require('../assets/label-round-restaurant-food-sign-drawing.png')}
          />
           </View>
         <Text style={styles.header}>SIGN UP</Text>
        <View>
        </View>
      <View>
        <TextInput style={styles.input} placeholder="First Name" />
        <br></br>
        <TextInput style={styles.input} placeholder="Last Name" />
        <br></br>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
        <br></br>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Password" />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={GoToMenu}>
          <Text
            style={styles.SignUpText}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')} style={styles.btn}>
              <Text style={styles.AccountText}>ALREADY HAVE AN ACCOUNT? LOGIN</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    backgroundColor: 'silver',
    width: 250,
    height: 50,
    marginTop: 10,
    alignSelf:'center',

  },

  SignUpText: {
    textAlign: 'center',
    backgroundColor: 'gold',
    width: 150,
    height: 30,
    marginTop: 10,
    alignSelf:'center',
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

  AccountText: {
    alignSelf:'center',
      borderRadius: 10,
      width: 150,
      marginTop: 15,
      height: 30,
      paddingTop:5,
      fontWeight:700,
      fontSize:12,
  }
});