import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
  } from 'react-native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { collection, getDocs } from 'firebase/firestore';
  import { auth, db } from '../config/firebase';
  import { useState, useEffect } from 'react';
  
  
  export default function Menu({ navigation }) {
    const [menu, setMenu] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [lunch, setLunch] = useState([]);
    const [dinner, setDinner] = useState([]);
  
  
    const fetchMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setMenu(newData);
        console.log(newData);
      } catch (error) {
        alert('error')
        console.error("Error fetching menu: ", error);
      }
    };
    useEffect(() => {
      fetchMenu();
    }, []);

    const fetchLunch = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "lunch"));
          const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setLunch(newData);
          console.log(newData);
        } catch (error) {
          alert('error')
          console.error("Error fetching lunch: ", error);
        }
      };
      useEffect(() => {
        fetchLunch();
      }, []); 
    
    
    return(
        <View></View>
    )}