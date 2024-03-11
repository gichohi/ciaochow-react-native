import { BoldText } from "./BoldText"
import { StyledText } from "./StyledText"
import { TextView } from "./TextView"

export const Middle = () => {
    return(
        <TextView>
            <StyledText>
                Hungry? <BoldText>CiaoChow</BoldText> helps {"\n"} you find something to eat.
            </StyledText>
        </TextView>
    )
}

export default Middle;