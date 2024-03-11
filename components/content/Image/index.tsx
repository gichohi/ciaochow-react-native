import { useChowStore } from "../../../store/Content.Store";
import { ImageView } from "./ImageView";
import { StyledImage } from "./StyledImage";


const TopImageView = () => {
    const chow = useChowStore((state) => state.chow);

    console.log("Chow Image", chow.image);

    return (
        <ImageView>
             <StyledImage testID="topImage" source={{uri: chow.image}}/>
        </ImageView>
    )
}

export default TopImageView;