import React from "react";
import { TitleText } from "./TitleText";
import { TitleView } from "./TitleView";
import { TextView } from "./TextView";

const Title = () => {
    return(
        <TitleView>
            <TextView>
            <TitleText>
                CiaoChow
            </TitleText>
            </TextView>
        </TitleView>
    )
}

export default Title;