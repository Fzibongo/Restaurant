import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    CheckBox,
    ScrollView
} from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import {auth, db } from '../config/firebase';
import { useState, useEffect } from 'react';


export default function Checkout({ navigation }) {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const [menu, setMenu] = useState([]);
    const fetchMenu = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, "Checkout"+authUser.uid));
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
    

      return (
        <View>
            <ScrollView>
                {menu.map((item) => (
                    <View  style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.tinyLogo}
                            source={item.Image } // Use the item's image URL
                        />
                        <Text>{item.Name}</Text>
                        <Text>{item.Price}</Text>

                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = {
    tinyLogo: {
        width: 100, // Adjust the width as needed
        height: 100, // Adjust the height as needed
    },
};