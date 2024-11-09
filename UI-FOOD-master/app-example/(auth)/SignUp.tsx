import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    // Handle sign-in logic here
  };

  return (
    <View style={styles.container}>
        <ScrollView style={{width: '100%'}}>
      <View style={styles.body}>
        <Text style={styles.title}>Sign In</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Full Name</Text>
          <TextInput style={styles.input} value={fullName} onChangeText={setFullName} placeholder="Enter your Full Name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Phone number</Text>
          <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Enter your phone number" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter your email" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Password</Text>
          <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput style={[styles.input,{backgroundColor: '#F5CB58'}]} value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry={true} />
          <TouchableOpacity style={styles.eyeButton}>
            <Image source={require('../../assets/images/eye_icon.png')} style={styles.eyeIcon} />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Password</Text>
          <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput style={[styles.input,{backgroundColor: '#F5CB58'}]} value={password} onChangeText={setPassword} placeholder="Enter password" secureTextEntry={true} />
          <TouchableOpacity style={styles.eyeButton}>
            <Image source={require('../../assets/images/eye_icon.png')} style={styles.eyeIcon} />
          </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotPasswordLink}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.btnSignIn]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign UP</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Text style={styles.buttonText}>Continue with GoogleApple</Text>
        </TouchableOpacity>
        <Text style={styles.signupText} onPress={()=>{router.push('/SignUp')}}>
          Do not have an account? <Text style={styles.signupLink}>Sign up</Text>
        </Text>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5CB58', // Yellow background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  forgotPasswordLink: {
    width: '100%',
    textAlign: 'right',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#F87146',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  btnSignIn:{
    backgroundColor: '#F87146',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  appleButton: {
    backgroundColor: '#000',
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  signupLink: {
    color: '#F87146',
  },
});

export default SignUp;