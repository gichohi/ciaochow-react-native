import { useEffect, useState } from "react";
import { ContentContainer } from "../components/content/Container";
import TopImageView from "../components/content/Image";
import Tab from "../components/content/Tab";
import { getChows } from "../api";
import { useUserStore } from "../store/User.Store";
import { useChowStore } from "../store/Content.Store";
import { ErrorLabel } from "../components/login/Form/ErrorLabel";
import { BottomView } from "../components/content/Button/BottomView";
import { StyledButton } from "../components/content/Button/StyledButton";
import { ButtonText } from "../components/content/Button/ButtonText";
import { Chow } from "../types";
import { BASE_URL } from "../constants";

const ContentScreen = () => {

    const user = useUserStore(state => state.user);
    const chowStore = useChowStore();

    const [error, setError] = useState("");

    useEffect(() => {
       chowsHandler();
    }, []);

    const chowsHandler = () => {
        const num = Math.floor(Math.random() * 2); 
        console.log("Index", num);
        getChows(user.token)
        .then((response) => {
            if(response != undefined) {
                const chow: Chow = {
                    title: response.data[num].attributes.Title,
                    description: response.data[num].attributes.Description,
                    image: BASE_URL + response.data[num].attributes.Image.data[0].attributes.url
                }
                console.log("Image", chow.image);
                chowStore.setChow(chow);
                
            } else {
                setError("Chows  Error");
            }
        })
        .catch((error) => {
            setError(error);
        })
    }

  
    return(
        <ContentContainer>
            <TopImageView/>
            <Tab/>
            <BottomView>
                <StyledButton
                testID="btnChow"
                onPress={chowsHandler}
                >
                    <ButtonText>Nah! Find me something else.</ButtonText>
                </StyledButton>
            </BottomView>
            {
                error.length > 0 ? <ErrorLabel>{error}</ErrorLabel> : ""
            }
        </ContentContainer>
    )
}

export default ContentScreen;