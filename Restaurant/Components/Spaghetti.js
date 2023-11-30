import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  
  
  export default function Spaghetti({navigation}) {
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
            source={require('../assets/Pasta-Napoletana-5FEAT-500x500.jpg')}
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
              <Text style={styles.SpaghettiText}>Spaghetti alla Napoletana</Text>
            </View>
            <View>
              <Text style={styles.PriceText}>R160</Text>
            </View>
            <View>
              <Text style={styles.DiscriptionText}>
                Pasta al pomodoro is an Italian food typically <br></br> prepared
                with pasta, olive oil, fresh ingredients. It is<br></br> intended
                to be a quik and light dish,rather than a dish in a heavvy sauce.
                pomodoro means "tomato"<br></br> in Italian.
              </Text>
            </View>
          </View>
  
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={styles.TotalText}>
                Total Cost<br></br>R160
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
  
    SpaghettiText: {
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