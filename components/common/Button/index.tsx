import React from "react"
import { ButtonText } from "./ButtonText"
import { ButtonView } from "./ButtonView"
import { StyledButton } from "./StyledButton"

export const RegisterButton = ({onPress, isValid}) => {
    return(
        <ButtonView>
            <StyledButton
            onPress={onPress}
            testID="btnRegister"
            disabled={!isValid}
            >
            <ButtonText>Register</ButtonText>
            </StyledButton>
        </ButtonView>
    )
}

export default RegisterButton;