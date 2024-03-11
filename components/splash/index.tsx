import SplashButton from "./Button"
import { SplashContainer } from "./Container"
import TopImageView from "./Images"
import Middle from "./Middle"
import Title from "./Title"

const Splash = () => {
    return(
        <SplashContainer>
            <TopImageView/>
            <Title/>
            <Middle/>
            <SplashButton/>
        </SplashContainer>
    )
}

export default Splash;