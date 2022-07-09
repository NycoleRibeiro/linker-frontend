import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/Desenvolvedor/Profile/Profile';

const { Navigator, Screen } = createStackNavigator();

export function DeveloperProfile() {
    return (
        <Navigator
        initialRouteName="Profile"
        screenOptions={{
            presentation: 'transparentModal',
            gestureEnabled: false,
            headerShown: false,
        }}>

            <Screen
            name="Profile"
            component={Profile}
            />


        </Navigator>
    );
}

export default DeveloperProfile;
