import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import { ThemedInput, ThemedButton } from "../../components";
import {logIn, signUp} from '../../store/actions/auth/authActions';
import {connect} from 'react-redux';

const Login = ({ navigation, logIn, signUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <ScrollView>
      <Text>Login</Text>
      <ThemedInput value={email} onChangeText={value => setEmail(value)} />

      <ThemedInput
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />

      <ThemedButton
        title="Login"
        onPress={() => {logIn(email, password); navigation.navigate("Dashboard")}}
      />
      <ThemedButton
        title="Sign up"
        onPress={() => {signUp(email, password); navigation.navigate("Dashboard")}}
      />
    </ScrollView>
  );
};

Login.navigationOptions = {
  title: "Login"
};
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (email, password) => dispatch(logIn(email, password)),
    signUp: (email, password) => dispatch(signUp(email, password)) 
  }
}

export default connect(null, mapDispatchToProps)(Login);
//export default Login;