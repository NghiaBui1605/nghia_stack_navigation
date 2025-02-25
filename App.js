import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Alert 
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PhoneNumberValidation = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[35789])([0-9]{8})$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage("Số điện thoại hợp lệ!");
      Alert.alert("Thành công", "Số điện thoại hợp lệ!", [
        { text: "OK", onPress: () => navigation.navigate("Home") }
      ]);
    } else {
      setErrorMessage("Số điện thoại không hợp lệ!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textDangNhap}>Đăng nhập</Text>

      <View style={styles.content}>
        <Text style={styles.textNhapSdt}>Nhập số điện thoại</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Text style={styles.textValidatePhoneNumber}>{errorMessage}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: phoneNumber.match(/^(0[35789])([0-9]{8})$/)
              ? "#0288D1"
              : "#e4e4e4",
          },
        ]}
        onPress={() => validatePhoneNumber(phoneNumber)}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: phoneNumber.match(/^(0[35789])([0-9]{8})$/)
                ? "#ffffff"
                : "#b5b5b5",
            },
          ]}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PhoneValidation" component={PhoneNumberValidation} options={{ title: "Đăng nhập" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
  },
  content: {
    borderWidth: 1,
    borderColor: "#f3f3f3",
  },
  textDangNhap: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  textNhapSdt: {
    marginTop: 50,
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "600",
    color: "#023b06",
    marginBottom: 20,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    padding: 15,
    borderRadius: 5,
    width: "85%",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 22,
  },
  textValidatePhoneNumber: {
    flex: 1,
    color: "red",
    marginLeft: 100,
    marginTop: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});