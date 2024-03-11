import { Back } from "./Back";
import { Front } from "./Front";
import { ImageView } from "./ImageView";
import { Image } from "react-native";
import { StyledImage } from "./StyledImage";

const TopImageView = () => {
    return (
        <ImageView>
        <Back>
        <StyledImage source={require("../../../assets/ellipse.png")} />
        </Back>
        <Front>
        <Image source={require("../../../assets/register.png")} />
        </Front>
    </ImageView>
    )
}

export default TopImageView;