import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import FormRegister from "../Form/FormRegister";
import { NavigationContainer } from "@react-navigation/native";

const USERNAME = "demo";
const EMAIL = "demo@plusnarrative.com";
const PASSWORD = "demoPassword1!";

describe('<RegisterForm/>', () => {
    it('should display register form', () => {

        const handleData = jest.fn()

        const screen = render(
            <NavigationContainer>
                <FormRegister handleData={handleData} />
            </NavigationContainer>
        );

        const usernameTestID = "username";
        const usernameInput = screen.getByTestId(usernameTestID);
        act(() => {
            fireEvent(usernameInput, 'focus');
            fireEvent.changeText(usernameInput, USERNAME);
        });

        const emailTestID = "email";
        const emailInput = screen.getByTestId(emailTestID);
        act(() => {
            fireEvent(emailInput, 'focus');
            fireEvent.changeText(emailInput, EMAIL);
        });

        const passwordTestID = "password";
        const passwordInput = screen.getByTestId(passwordTestID);
        act(() => {
            fireEvent(passwordInput, 'focus')
            fireEvent.changeText(passwordInput, PASSWORD);
        });
        
        expect(usernameInput.props.value).toBe(USERNAME);
        expect(emailInput.props.value).toBe(EMAIL);
        expect(passwordInput.props.value).toBe(PASSWORD)
    });

    it('allows user to submit form', async () => {

        const handleData = jest.fn()

        const screen = render(
            <NavigationContainer>
                <FormRegister handleData={handleData} />
            </NavigationContainer>
        );
        const usernameTestID = "username";
        const usernameInput = screen.getByTestId(usernameTestID);
        act(() => {
            fireEvent(usernameInput, 'focus');
            fireEvent.changeText(usernameInput, USERNAME);
        });

        const emailTestID = "email";
        const emailInput = screen.getByTestId(emailTestID);
        act(() => {
            fireEvent(emailInput, 'focus');
            fireEvent.changeText(emailInput, EMAIL);
        });

        const passwordTestID = "password";
        const passwordInput = screen.getByTestId(passwordTestID);
        act(() => {
            fireEvent(passwordInput, 'focus');
            fireEvent.changeText(passwordInput, PASSWORD);
        });

        const registerButton = screen.getByTestId("btnRegister");
        act(() => {
            fireEvent.press(registerButton);
        });

        await waitFor(() => {
            expect(registerButton.props.accessibilityState.disabled).toEqual(false);
        });

    });


    it('disables button for invalid input', async () => {

        const handleData = jest.fn()

        const screen = render(
            <NavigationContainer>
                <FormRegister handleData={handleData} />
            </NavigationContainer>
        );
        const usernameTestID = "username";
        const usernameInput = screen.getByTestId(usernameTestID);
        fireEvent(usernameInput, 'focus');
        act(() => {
            fireEvent.changeText(usernameInput, USERNAME);
        });

        const emailTestID = "email";
        const emailInput = screen.getByTestId(emailTestID);
        fireEvent(emailInput, 'focus');
        act(() => {
            fireEvent.changeText(emailInput, EMAIL);
        });

        const passwordTestID = "password";
        const passwordInput = screen.getByTestId(passwordTestID);
        fireEvent(passwordInput, 'focus');
        act(() => {
            fireEvent.changeText(passwordInput, "demo");
        });

        const registerButton = screen.getByTestId("btnRegister");
        act(() => {
            fireEvent.press(registerButton);
        });
        await waitFor(() => {
            expect(registerButton.props.accessibilityState.disabled).toEqual(true);
        });

    });

})