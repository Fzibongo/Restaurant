import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  
  export default function Rice({ navigation }) {
    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity>
          <Image
            style={styles.Img1}
            source={require('../assets/left-chevron.png')}
          />
          </TouchableOpacity>
          <View>
            <Image style={styles.Img1} source={require('../assets/heart.png')} />
          </View>
        </View>
        <View>
          <Image
            style={styles.Img2}
            source={require('../assets/images(19).jpg')}
          />
          <View style={styles.btn}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image
                style={styles.Ellipse1}
                source={require('../assets/icons8-ellipse-50.png')}
              />
              <View>
                <Image
                  style={styles.Ellipse1}
                  source={require('../assets/icons8-ellipse-50.png')}
                />
              </View>
              <View>
                <Image
                  style={styles.Ellipse1}
                  source={require('../assets/icons8-ellipse-50.png')}
                />
              </View>
              <View>
                <Image
                  style={styles.Ellipse1}
                  source={require('../assets/icons8-ellipse-50.png')}
                />
              </View>
            </View>
            <View>
              <Text style={styles.RiceText}>Fried Rice</Text>
            </View>
            <View>
              <Text style={styles.PriceText}>R210</Text>
            </View>
            <View>
              <Text style={styles.DiscriptionText}>
                Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is ofetn eaten by itself or as  an accompanimen to another dish <br></br> 
              </Text>
            </View>
          </View>
  
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.TotalText}>
                Total Cost<br></br>R210
              </Text>
            </View>
            <View>
              <Text style={styles.TotalText}>
                Delivery Cost<br></br>Free
              </Text>
            </View>
            <View>
              <Text style={styles.TotalText}>
                Delivery Time<br></br>3pm
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
          <TouchableOpacity>
                <Image
                  style={styles.btn1}
                  source={require('../assets/shopping-bag-line-style-icon-diwali-vector.jpg')}
                />
                </TouchableOpacity>
              </View>
               <View>
            <TouchableOpacity style={styles.btn}>  onPress={() => navigation.navigate('Checkout')}
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
  
    Ellipse1: {
      width: 20,
      height: 12,
      backgroundColor: 'gold',
      marginRight: 50,
    },
  
    RiceText: {
      fontFamily: 'Kaushan Script',
      marginTop: 10,
    },
  
    PriceText: {
      marginTop: 20,
    },
  
    DiscriptionText: {
      marginTop: 20,
    },
  
    TotalText: {
      marginTop: 20,
    },
  
    btn1: {
      width: 45,
      height: 45,
      marginTop: 20
    },
  
    OutText: {
      width: 180,
      height: 30,
      backgroundColor: 'gold',
      textAlign: 'center',
      marginTop: 30,
      marginRight: 50,
      borderRadius: 10
    }
  });
  