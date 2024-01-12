import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { addDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from '../config/firebase';
import { useState, useEffect } from 'react';


export default function Cart({ navigation, route }) {
    const { data, count, totalPrice } = route.params;
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const Checkout = async () => {
        try {
          const authUser = getAuth().currentUser;
          if (authUser) {
            const docRef = await addDoc(collection(db, "Checkout"+authUser.uid), {
              owner_uid: authUser.uid,
              Name: data.name,
              Price: totalPrice,
              Image: data.image,
              Amount: count,
              Profile: name,
              Address: address
            });
            console.log("Document written with ID: ", docRef.id);
            navigation.navigate('ThankYou', {data: data, count: count});
          } else {
            console.error("User not authenticated");
          }
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };


    return (
        <View>
            <Text style={styles.SumText}>Order Summary</Text>
            <View style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'orange',
                borderBottomColor: 'orange',
                marginTop: 60, marginLeft: 20,
                justifyContent: 'space-between',
                width: 330,
                backgroundColor: 'brown',
            }} >
                <Text style={styles.count}>{count}</Text>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.price}>{totalPrice}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.info}>CheckOut Info.</Text>

                <TextInput style={styles.details}
                placeholder='Name...'
                value={name}
                onChangeText={setName}

                />
                <TextInput style={styles.home}
                placeholder='Address...'
                value={address}
                onChangeText={setAddress}
                
                
                /> 

                <TouchableOpacity  onPress={Checkout}><Text style={styles.out}>CheckOut</Text></TouchableOpacity>               
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    SumText: {
        fontSize: 34,
        fontWeight: 'bold'
    },

    Amount: {
        width: 10,
        height: 10,
    },

    count: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 30,
        height: 30,
        borderWidth: 1,
        textAlign: 'center',
        color: 'gold',
        borderColor: 'gray',
        borderRadius: 10

    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gold'
    },

    info: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10
    },

    details: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20
    },

    home: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20
    },

    out: {
        fontWeight: 'bold',
        marginTop: 10,
        width: 150,
        borderRadius: 10,
        backgroundColor: 'gold'
    }

})