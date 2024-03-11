import React from "react";
import { TitleText } from "./TitleText";
import { TitleView } from "./TitleView";
import { Image } from "react-native";
import { TextView } from "./TextView";

const Title = () => {
    return(
        <TitleView>
            <TextView>
            <TitleText>
                CiaoChow
            </TitleText>
            </TextView>
            <Image source={require("../../../assets/carrot.png")}/>
        </TitleView>
    )
}

export default Title;