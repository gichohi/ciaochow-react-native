import { NavigationContainer } from "@react-navigation/native";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { BASE_URL } from "../../constants";
import { CHOWS_MOCK_RESPONSE } from "../../msw/mock.data";
import ContentScreen from "../ContentScreen";



describe('', () => {
    const server = setupServer(
        rest.get(`${BASE_URL}/api/chows?populate=*`, (_req, res, ctx) => {
            return res(ctx.status(200), ctx.json(CHOWS_MOCK_RESPONSE));
        })       
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


    it('should display image', async () => {

        const screen = render(
            <NavigationContainer>
                <ContentScreen/>
            </NavigationContainer>
        );

        const imageTestID = "topImage";
        const topImage = screen.getByTestId(imageTestID);

        const titleTestId = "tabtitle";
        const title = screen.getByTestId(titleTestId);

       
        await waitFor(() => {
            expect(topImage.props["source"]["uri"]).toBeTruthy();
            expect(title.props["children"]).toBeTruthy();
        });
    });

    it('should display content on button press', async () => {

        const screen = render(
            <NavigationContainer>
                <ContentScreen/>
            </NavigationContainer>
        );

        const imageTestID = "topImage";
        const topImage = screen.getByTestId(imageTestID);

        const titleTestId = "tabtitle";
        const title = screen.getByTestId(titleTestId);

        const buttonTestId = "btnChow";
        const chowButton = screen.getByTestId(buttonTestId);
        act(() => {
            fireEvent.press(chowButton);
        });

       
        await waitFor(() => {
            expect(topImage.props["source"]["uri"]).toBeTruthy();
            expect(title.props["children"]).toBeTruthy();
        });
    })
})