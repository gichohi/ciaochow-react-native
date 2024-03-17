import { NavigationContainer } from "@react-navigation/native";
import Splash from "..";
import { render } from "@testing-library/react-native";

describe('<Splash/>', () => {
    it('should display splash', async () => {
        const screen = render(
            <NavigationContainer>
                <Splash />
            </NavigationContainer>
        );

        const splashButton = screen.getByTestId("btnSplash");
        expect(splashButton).toBeTruthy();
    });

});