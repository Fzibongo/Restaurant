import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';


const ThankYou = ({ navigation, route }) => {
  return (
    <View  style={containerStyle}>
      <Text style={headingStyle}>Thank You!</Text>
      <Text style={paragraphStyle}>Your order has been received and is being prepared.</Text>
      < TouchableOpacity onPress={() => navigation.navigate('Menu')}><Text>Back to Home</Text></ TouchableOpacity>
    </View>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  maxWidth: '400px',
  margin: '0 auto',
  marginTop: '50px',
};

const headingStyle = {
  color: '#4CAF50',
};

const paragraphStyle = {
  marginBottom: '20px',
};

const linkStyle = {
  color: '#4CAF50',
  textDecoration: 'none',
  fontWeight: 'bold',
};


export default ThankYou;
