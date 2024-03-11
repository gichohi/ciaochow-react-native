import React, { useState } from "react";
import { LoginContainer } from "../components/login/Container";
import FormLogin from "../components/login/Form/FormLogin";
import TopImageView from "../components/login/Images";
import Title from "../components/login/Title";
import { loginWithEmail } from "../api";
import { ErrorLabel } from "../components/login/Form/ErrorLabel";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "../store/User.Store";
import LocalStorage from "../store/LocalStorage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackNavigatorParams } from "../types";


const LoginScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();

    const userStore = useUserStore();

    const [error, setError] = useState("");

    const handleData = (formData: any) => {
        loginHandler(formData);
    }

    const loginHandler = async (data: any) => {
        const email = data.email;
        const password = data.password;
        const response = await loginWithEmail({ email: email, password: password });
        console.log("LoginHandlerResponse", response);
        
        if (response == undefined) {
            setError("Login Error");
        } else {
            console.log("Login Handler JWT", response.jwt);
            userStore.addUser({email: response.user.email, token: response.jwt});
            LocalStorage.setItem(response.user.email, response.user);
            navigation.navigate('Home');
        }
    }

    return (
        <LoginContainer>
            <TopImageView />
            <Title />
            <FormLogin handleData={handleData} />
            {
                error.length > 0 ? <ErrorLabel testID="lblError">{error}</ErrorLabel> : ""
            }
        </LoginContainer>
    )
}

export default LoginScreen;