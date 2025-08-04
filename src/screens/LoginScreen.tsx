import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../App';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const { height, width } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    Alert.alert('Success', 'Logged in successfully!', [
      {
        text: 'OK',
        onPress: () => {
          const userData = {
            id: '1',
            name: 'User',
            email: email,
            username: email.split('@')[0],
          };
          login(userData);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Top Blue Background */}
      <View style={styles.topBackground}>
        <Text style={styles.logo}>LOGO</Text>
      </View>

      {/* Curved Transition Background */}
      <View style={styles.curvedTransition} />

      {/* Pop-in Login Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur. Ipsum massa turpis morbi platea. Vitae habitant duis.
        </Text>

        <Text style={styles.label}>Email address</Text>
        <TextInput
          placeholder="Enter email address"
          placeholderTextColor="#999"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBackground: {
    height: height * 0.35,
    backgroundColor: '#3282AA',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  logo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  curvedTransition: {
    position: 'absolute',
    top: height * 0.33,
    left: 0,
    right: 0,
    height: height * 0.67,
    backgroundColor: '#fff',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    zIndex: 0,
  },
  card: {
    position: 'absolute',
    top: height * 0.28,
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    zIndex: 2,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    // Android elevation
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#1D6D99',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#1D6D99',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  link: {
    color: '#1D6D99',
    fontWeight: '500',
  },
});
