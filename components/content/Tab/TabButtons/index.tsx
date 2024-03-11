import { ButtonText } from "./ButtonText";
import { ButtonView } from "./ButtonView"
import { TabItem } from "./TabItem"

const TabButtons = () => {
    return(
        <ButtonView>
            <TabItem style={{ borderBottomWidth: 2, borderBottomColor: '#4CAD73'}}>
                <ButtonText style={{color: '#4CAD73', fontWeight: 'bold'}}>Description</ButtonText>
            </TabItem>
            <TabItem>
                <ButtonText>Nutrition facts</ButtonText>
            </TabItem>
        </ButtonView>
    )
}

export default TabButtons;