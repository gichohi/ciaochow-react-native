import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginFormView } from './LoginFormView';
import { StyledTextInput } from './StyledTextInput';
import { Label } from './Label';
import React from 'react';
import { LoginLabel } from './LoginLabel';
import { ErrorLabel } from './ErrorLabel';
import { StyledButton } from '../../common/Button/StyledButton';
import { ButtonText } from '../../common/Button/ButtonText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackNavigatorParams } from '../../../types';
import { BoldText } from './BoldText';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required')
        .label('Email'),
    password: Yup.string()
        .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
        .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
        .matches(/\d/, 'Password must have a number')
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required')
        .label('Password')

});

const FormLogin = ({ handleData }) => {

    const handleFormSubmit = (values: any) => {
        handleData(values);
    }

    const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();


    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
        >
            {({ handleChange, handleSubmit, isValid, values, errors }) => (
                <LoginFormView>
                    <Label>email</Label>
                    <StyledTextInput
                        placeholder="your email"
                        value={values.email}
                        onChangeText={handleChange("email")}
                        testID="email"
                        autoCapitalize="none"
                    />
                    {errors.email && <ErrorLabel>{errors.email}</ErrorLabel>}


                    <Label>password</Label>
                    <StyledTextInput
                        placeholder="your password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                        testID="password"
                        autoCapitalize="none"
                        secureTextEntry
                    />
                    {errors.password && <ErrorLabel>{errors.password}</ErrorLabel>}


                    <StyledButton
                        style={{ backgroundColor: isValid ? "#4CAD73" : "#828282" }}
                        onPress={handleSubmit}
                        testID="btnLogin"
                        disabled={!isValid}
                    >
                        <ButtonText>Login</ButtonText>
                    </StyledButton>
                    <LoginLabel>Don't Have an account?
                            <BoldText 
                            onPress={() => navigation.navigate("Register")}
                            style={{ fontWeight: 'bold' }}>
                                Register
                            </BoldText>
                    </LoginLabel>

                </LoginFormView>
            )}
        </Formik>
    );
};

export default FormLogin;