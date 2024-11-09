import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Modal, Image } from 'react-native';

const VerificationCodeScreen = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [isRegistered, setIsRegistered] = useState(false);

  const handleResendCode = () => {
    // Implement logic to send the code again
    setTimer(60); // Reset the timer
  };

  const handleContinue = () => {
    setIsRegistered(true)
  };

  const handleInputChange = (text: any) => {
    setVerificationCode(text);
  };

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the confirmation code</Text>
      <View style={styles.codeInputContainer}>
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={handleInputChange}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={handleInputChange}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={handleInputChange}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={handleInputChange}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={handleInputChange}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.codeInput}
          value={verificationCode}
          onChangeText={handleInputChange}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.verificationMessage}>
        Verification code has been sent to the phone number Your 0724*****
      </Text>
      <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
        <Text style={styles.resendButtonText}>
          Haven't received the code yet?
        </Text>
        <Text style={styles.resendButtonText2}>
            Resend ({timer} seconds)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue} disabled={verificationCode.length < 0}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      <Modal
        visible={isRegistered}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../../assets/images/tick-circle.png')} style={styles.checkIcon} />
            <Text style={styles.modalTitle}>Registered Successfully</Text>
            <Text style={styles.modalMessage}>
              03456*****
            </Text>
            <Text style={styles.modalMessage}>
              Your phone number has been successfully registered
            </Text>
            <TouchableOpacity style={styles.continueButton} onPress={()=>{router.push("/homeFood")}}>
              <Text style={styles.continueButtonText}>Continue on homepage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5CB58', // Yellow background
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    padding:20
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ccc',
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 24,
  },
  verificationMessage: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  resendButton: {
    marginBottom: 20,
  },
  resendButtonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  resendButtonText2: {
    color: '#F87146',
    fontSize: 16,
    textAlign: 'center',

  },
  continueButton: {
    backgroundColor: '#F87146',
    padding: 15,
    width: '100%',
    borderRadius: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius:   
 10,
    alignItems:   
 'center',
  },
  checkIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default VerificationCodeScreen;