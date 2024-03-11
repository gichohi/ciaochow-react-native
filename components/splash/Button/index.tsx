import { useNavigation } from "@react-navigation/native";
import { ButtonText } from "./ButtonText"
import { ButtonView } from "./ButtonView"
import { StyledButton } from "./StyledButton"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackNavigatorParams } from "../../../types";

const SplashButton = () => {
    //const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigatorParams>>();

    return(
        <ButtonView>
            <StyledButton
            >
                <ButtonText>Get Started</ButtonText>
            </StyledButton>
        </ButtonView>
    )
}

export default SplashButton;