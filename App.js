import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại!');
    } else {
      Alert.alert('Số điện thoại của bạn', phoneNumber);
    }
  };
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.subTitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro 
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        onChangeText={setPhoneNumber}
        value={phoneNumber}/>
      <TouchableOpacity style={styles.buttonInput} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 35,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
    borderBottomWidth: 2,
    paddingBottom: 15,
    borderBottomColor: 'gray',
  },
  subTitle: {
    marginTop: 50,
    fontSize: 20,
    marginLeft: 0,
    
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    paddingLeft: 0,

  },
  input: {
    marginTop: 20,
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    padding: 5,
  },
  buttonInput: {
    marginTop: 20,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
