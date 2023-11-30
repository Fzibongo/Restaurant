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

  const fetchDrinks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "drinks"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDrinks(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching drinks: ", error);
    }
  };
  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDessert = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "dessert"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDessert(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching dessert: ", error);
    }
  };
  useEffect(() => {
    fetchDessert();
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

  const fetchDinner = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "dinner"));
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDinner(newData);
      console.log(newData);
    } catch (error) {
      alert('error')
      console.error("Error fetching dinner: ", error);
    }
  };
  useEffect(() => {
    fetchDinner();
  }, []);


  const handleSignOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      alert('User signed out successfully');
      navigation.navigate("LogIn");
      // You can navigate the user to another screen or update your UI as needed
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  //store the state of the selected category
  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);
  }

  const getAll = async () => {
    try {
      const lunchData = await fetchcategory('lunch');
      const dinnerData = await fetchcategory('dinner');
      const dessertData = await fetchcategory('dessert');
      const drinksData = await fetchcategory('drinks');
      const allData = [...lunchData, ...dinnerData, ...dessertData, ...drinksData];
      setMenu(allData);
      setLunch(lunchData);
    } catch (error) {
      console.log('Error fetching all data:', error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <View>
      <View>
        <ImageBackground
          style={styles.Cover}
          source={require('../assets/1600w-L2ikMj2y2Dg.webp')}
        />
      </View>

      <View style={styles.btnCategory}>
        <TouchableOpacity style={styles.btnCategoryALL}>
          <Text style={[styles.all, selectedCategory === "All" && styles.all_selected]} onPress={() => handleSelectedCategory("All")}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.lunch, selectedCategory === "Lunch" && styles.lunch_selected]} onPress={() => handleSelectedCategory("Lunch")}>Lunch</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.dinner, selectedCategory === "Dinner" && styles.dinner_selected]} onPress={() => handleSelectedCategory("Dinner")}>Dinner</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.dessert, selectedCategory === "Dessert" && styles.dessert_selected]} onPress={() => handleSelectedCategory("Dessert")}>Dessert</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.drinks, selectedCategory === "Drinks" && styles.drinks_selected]} onPress={() => handleSelectedCategory("Drinks")}>Drinks</Text>
        </TouchableOpacity>
      </View>

      {selectedCategory === "All" && (
        <>
          <ScrollView>
            <View style={styles.flexBox}>
              {menu.map((menu) => (
                <TouchableOpacity onPress={() => navigation.navigate('Salmon', { data: menu })} style={styles.card}>
                  <View  >
                    <Image
                      style={styles.Img1}
                      source={menu.image}
                    />
                    <Text style={styles.Fish}>{menu.name}</Text>
                    <Text style={styles.Fish}>{menu.price}</Text>

                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </>
      )}


      {selectedCategory === "Lunch" && (
        <>
          <ScrollView>
            <View style={styles.flexBox}>
              {lunch.map((Lunch) => (
                <TouchableOpacity key={Lunch.id} onPress={() => navigation.navigate('Salmon', { data: lunch })} style={styles.card}>
                  <View key={Lunch.id} >
                    <Image
                      style={styles.Img1}
                      source={Lunch.image}
                    />
                    <Text style={styles.Fish}>{Lunch.name}</Text>
                    <Text style={styles.Fish}>{Lunch.price}</Text>

                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </>
      )}

      <View >
        <ScrollView>
          <View style={styles.flexBox}>
            {menu.map((menu) => (
              <TouchableOpacity onPress={() => navigation.navigate('Salmon', { data: menu })} style={styles.card}>
                <View  >
                  <Image
                    style={styles.Img1}
                    source={menu.image}
                  />
                  <Text style={styles.Fish}>{menu.name}</Text>
                  <Text style={styles.Fish}>R{menu.price}</Text>

                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Cover: {
    width: 350,
    height: 150
  },

  Out: {
    width: 35,
    height: 35,
    marginLeft: 350
  },

  FoodText: {
    color: 'gold',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'kaushanScript',
    marginLeft: 25,
  },
  Text: {
    marginLeft: 50,
    marginTop: 50,
  },
  image: {
    marginTop: 50,
  },
  btnCategory: {
    width: 60,

    borderRadius: 8,
    flexDirection: 'row',
    marginTop: 20,
  },
  btnCategoryALL: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
    height: 30,
    width: 40,

  },

  all_selected: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
    height: 30,
    width: 40,
    backgroundColor: 'orange',

  },

  lunch: {
    width: 60,
    fontWeight: 'bold',

    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
  },

  lunch_selected: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
    backgroundColor: 'orange'
  },

  dinner: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
  },

  dinner_selected: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
    backgroundColor: 'orange'
  },

  BreakfastText: {
    paddingLeft: 13,
  },

  dessert: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
  },

  dessert_selected: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
    backgroundColor: 'orange'
  },

  drinks: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
  },

  drinks_selected: {
    width: 60,
    fontWeight: 'bold',
    borderRadius: 8,
    marginLeft: 7,
    textAlign: 'center',
    backgroundColor: 'orange'
  },

  Img1: {
    width: 160,
    height: 80,
    marginTop: 5,
    borderRadius: 10,
    marginLeft: 4,
    borderWidth: 1,
    borderColor: 'brown'

  },

  Fish: {
    fontFamily: 'italiano',
    fontWeight: "bold",
    textAlign: "center",
  },

  Img2: {
    width: 160,
    height: 80,
  },

  Steak: {
    fontFamily: 'italiano',
  },

  Img3: {
    width: 160,
    height: 80,
  },

  Rice: {
    fontFamily: 'italiano',
  },

  Img4: {
    width: 160,
    height: 80,
  },

  Chicken: {
    fontFamily: 'italiano',
  },

  Goose: {
    fontFamily: 'italiano',
  },

  card: {
    width: 170,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'pearl',
    marginTop: 15,
    marginLeft: 7,
    height: 150
  }
  ,
  Toast: {
    fontFamily: 'italiano',
  },
  flexBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },





});
