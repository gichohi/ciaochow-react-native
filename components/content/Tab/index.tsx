import { useChowStore } from "../../../store/Content.Store"
import { ContentText } from "./ContentText"
import { ContentView } from "./ContentView"
import TabButtons from "./TabButtons"
import { TabTitle } from "./TabTitle"
import { TabTitleView } from "./TabTitleView"
import { TabView } from "./TabView"

const Tab = () => {
 
    const chow = useChowStore(state => state.chow);

    return(
        <TabView>
            <TabTitleView>
                <TabTitle testID="tabtitle">{chow.title}</TabTitle>
            </TabTitleView>
            <TabButtons/>
            <ContentView>
                <ContentText>
                {chow.description}
                </ContentText>
            </ContentView>
        </TabView>
    )
}

export default Tab;