import React, { useState } from "react";
import { useUserStore } from "../store/User.Store";
import { registerWithEmail } from "../api";
import { RegisterContainer } from "../components/register/Container";
import TopImageView from "../components/register/Images";
import Title from "../components/register/Title";
import FormRegister from "../components/register/Form/FormRegister";
import LocalStorage from "../store/LocalStorage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackNavigatorParams } from "../types";
import { ErrorLabel } from "../components/register/Form/ErrorLabel";

const RegisterScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();

    const [error, setError] = useState("");

    const handleData = (formData: any) => {
        console.log(formData);
        registerHandler(formData);
    }

    const registerHandler = (data: any) => {
        const username = data.username;
        const email = data.email;
        const password = data.password;
        registerWithEmail({ username: username, email: email, password: password })
            .then((response) => {
                console.log("Response: " + response);
                if (response != undefined) {
                    useUserStore((state) => {
                        state.addUser({ email: response.user.email, token: response.jwt });
                        LocalStorage.setItem(response.user.email, response.user);
                    });
                    navigation.navigate('Login');
                } else {
                    setError("Registration Error");
                }
            })
            .catch(() => {
                setError("Registration Error");
            });
    }

    return (
        <RegisterContainer>
            <TopImageView />
            <Title />
            <FormRegister handleData={handleData} />
            {
                error.length > 0 ? <ErrorLabel testID="lblError">{error}</ErrorLabel> : ""
            }
        </RegisterContainer>
    )
}

export default RegisterScreen;