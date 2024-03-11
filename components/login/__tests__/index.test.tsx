import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import FormLogin from "../Form/FormLogin";
import { NavigationContainer } from "@react-navigation/native";

const EMAIL = "demo@plusnarrative.com";
const PASSWORD = "demoPassword1!";

describe('<LoginForm/>', () => {
    it('should display register form', () => {

        const handleData = jest.fn();

        const screen = render(
            <NavigationContainer>
                <FormLogin handleData={handleData}/>
            </NavigationContainer>
        );

        const emailTestID = "email";
        const emailInput = screen.getByTestId(emailTestID);
        act(() => {
            fireEvent.changeText(emailInput, EMAIL);
        });

        const passwordTestID = "password";
        const passwordInput = screen.getByTestId(passwordTestID);
        fireEvent(passwordInput, 'focus');
        act(() => {
            fireEvent.changeText(passwordInput, PASSWORD);
        });
        
        expect(emailInput.props.value).toBe(EMAIL);
        expect(passwordInput.props.value).toBe(PASSWORD)
    });

    it('allows user to submit form', async () => {

        const handleData = jest.fn();

        const screen = render(
            <NavigationContainer>
                <FormLogin handleData={handleData}/>
            </NavigationContainer>
        );

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

        const loginButton = screen.getByTestId("btnLogin");
        act(() => {
            fireEvent.press(loginButton);
        });
        await waitFor(() => {
            expect(loginButton.props.accessibilityState.disabled).toEqual(false);
        });

    });


    it('disables button for invalid input', async () => {

        const handleData = jest.fn();

        const screen = render(
            <NavigationContainer>
                <FormLogin handleData={handleData}/>
            </NavigationContainer>
        );

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
            fireEvent.changeText(passwordInput, "demo");
        });

        const loginButton = screen.getByTestId("btnLogin");
        act(() => {
            fireEvent.press(loginButton);
        });

        await waitFor(() => {
            expect(loginButton.props.accessibilityState.disabled).toEqual(true);
        });

    });

})