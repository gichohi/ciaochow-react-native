import { StyleSheet } from "react-native";
import { useTabStore } from "../../../../store/Tab.Store";
import { ButtonText } from "./ButtonText";
import { ButtonView } from "./ButtonView"
import { TabItem } from "./TabItem"

const TabButtons = () => {
    const tabStore = useTabStore();
    const active = useTabStore(state => state.active);

    return(
        <ButtonView>
            <TabItem onPress={() => tabStore.setActive(0)} style={[active == 0 ? tabStyle.activeTab : tabStyle.passiveTab]}>
                <ButtonText style={[active == 0 ? tabStyle.activeText : tabStyle.passiveText]}>Description</ButtonText>
            </TabItem>
            <TabItem onPress={() => tabStore.setActive(1)} style={[active == 1 ? tabStyle.activeTab : tabStyle.passiveTab]}>
                <ButtonText style={[active == 1 ? tabStyle.activeText : tabStyle.passiveText]}>Nutrition facts</ButtonText>
            </TabItem>
        </ButtonView>
    )
}

const tabStyle = StyleSheet.create({
    activeTab: {
        borderBottomColor: '#4cAD73',
        borderBottomWidth: 2
    },
    activeText: {
        color: '#4CAD73',
        fontWeight: 'bold'
    },
    passiveTab: {
        borderBottomColor: '#333333',
        borderBottomWidth: 0
    },
    passiveText: {
        color: '#333333'
    }
})

export default TabButtons;