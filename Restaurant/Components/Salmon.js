import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";
import { useState, useEffect } from "react";
import { Alert } from 'react-native';


export default function Salmon({ navigation, route }) {
  const { data } = route.params;
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const handleCheckout = () => {
    if (count === 0) {
      Alert.alert("Error", "Please select a quantity greater than 0.");
    } else {
      // Proceed with navigation or other actions
      navigation.navigate("Cart", {
        data: data,
        count: count,
        totalPrice: count * parseInt(data.price),
      });
    }
  };

  return (
    <View>
      <View>
        <Image style={styles.Img2} source={data.image} />
        <View style={styles.btn}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View></View>
            <View></View>
            <View></View>
          </View>
          <View>
            <Text style={styles.SalmonText}>{data.name}</Text>
          </View>

          <View>
            <Text style={styles.DiscriptionText}>{data.description}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.TotalText}>Total Cost:</Text>
            <Text style={styles.Amount}>R{count * parseInt(data.price)}</Text>
          </View>
          <View>
            <Text style={styles.TotalText}>
              Delivery Cost<br></br>Free
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "space-between" }}>
          <View style={styles.box}>
            <View>
              <TouchableOpacity></TouchableOpacity>
            </View>
            <View style={styles.Count}>
              <View>
                <View style={{ flexDirection: 'row', marginLeft: 25, fontWeight: 'bold' }}>
                  <TouchableOpacity onPress={() => setCount(count - 1)} style={styles.minus}>
                    -
                  </TouchableOpacity >
                  <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>{count}</Text>
                  <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.plus}>
                    +
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginRight: 150, color: '#000', fontSize: 'bold', }} onPress={() => setCount(initialCount)}>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.btn} onPress={handleCheckout}>
              <Text style={styles.OutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Img1: {
    width: 26,
    height: 24,
  },

  Img2: {
    width: -10,
    height: 250,
    marginTop: 20,
  },

  Amount: {
    fontWeight: "bold",
  },

  Count: {
    marginTop: 10,
    width: 180,
    height: 30,
    borderRadius: 10,
    textAlign: "center",
  },

  minus: {
    fontWeight: "bold",
    fontSize: 35,
    marginRight: 9,
  },

  plus: {
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 9,
  },

  SalmonText: {
    fontFamily: "Kaushan Script",
    marginTop: 10,
    fontWeight: "bold",
  },

  DiscriptionText: {
    marginTop: 20,
    borderWidth: 0,
  },

  TotalText: {
    marginTop: 20,
    marginRight: 25,
    fontWeight: "bold",
  },

  btn1: {
    width: 35,
    height: 35,
    marginTop: 10,
  },

  OutText: {
    width: 180,
    height: 35,
    backgroundColor: "gold",
    textAlign: "center",
    marginTop: 30,
    borderRadius: 10,
    alignSelf: "center",
  },
  box: {
    width: 180,
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 150,
    paddingHorizontal: 30,
    alignSelf: "center",
    marginTop: 15,
  },
});
