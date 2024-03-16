import { useChowStore } from "../../../store/Content.Store"
import { useTabStore } from "../../../store/Tab.Store"
import { ContentText } from "./ContentText"
import { ContentView } from "./ContentView"
import TabButtons from "./TabButtons"
import { TabTitle } from "./TabTitle"
import { TabTitleView } from "./TabTitleView"
import { TabView } from "./TabView"

const Tab = () => {
 
    const chow = useChowStore(state => state.chow);
    const active = useTabStore(state => state.active);

    return(
        <TabView>
            <TabTitleView>
                <TabTitle testID="tabtitle">{chow.title}</TabTitle>
            </TabTitleView>
            <TabButtons/>
            <ContentView>
                <ContentText>
                {active == 0 ? chow.description : "Nutrition"}
                </ContentText>
            </ContentView>
        </TabView>
    )
}

export default Tab;