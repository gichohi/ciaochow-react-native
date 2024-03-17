import { useChowStore } from "../../../store/Content.Store";
import { ImageView } from "./ImageView";
import { StyledImage } from "./StyledImage";


const TopImageView = () => {
    const chow = useChowStore((state) => state.chow);
    const image = chow.image;
    console.log("Chow Image", image);
    if (image != "") {
        return (
            <ImageView>
                <StyledImage testID="topImage" source={{ uri: image }} />
            </ImageView>
        )
    } 
}

export default TopImageView;