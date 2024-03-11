import { NavigationContainer } from "@react-navigation/native";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import LoginScreen from "../LoginScreen";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { BASE_URL } from "../../constants";
import { ERROR_MOCK_RESPONSE } from "../../msw/mock.data";



describe('', () => {
    const server = setupServer(
        rest.post(
            `${BASE_URL}/api/auth/local`,
            (_req, res, ctx) => {
                return res(ctx.status(400), ctx.json(ERROR_MOCK_RESPONSE));
            },
        )
    );
    
    beforeAll(() => {
        server.listen();
    });

    afterEach(() => {
        server.resetHandlers();
    });

    afterAll(() => {
        server.close();
    });


    it('should display error message on API error', async () => {

        const screen = render(
            <NavigationContainer>
                <LoginScreen/>
            </NavigationContainer>
        );

        const emailTestID = "email";
        const emailInput = screen.getByTestId(emailTestID);
        act(() => {
            fireEvent(emailInput, 'focus');
            fireEvent.changeText(emailInput, "demo@plusnarrative.com");
        });

        const passwordTestID = "password";
        const passwordInput = screen.getByTestId(passwordTestID);
        act(() => {
            fireEvent(passwordInput, 'focus');
            fireEvent.changeText(passwordInput, "demoPassword1");
        });

        const loginButton = screen.getByTestId("btnLogin");
        act(() => {
            fireEvent.press(loginButton);
        });

        await waitFor(() => {
            const errorLabel = screen.getByTestId("lblError");
            expect(errorLabel.props["children"]).toBe("Login Error");
        });
    })
})