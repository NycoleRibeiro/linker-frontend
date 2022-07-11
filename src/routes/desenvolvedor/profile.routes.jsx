import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/Desenvolvedor/Profile/Profile';
import EditProfile from '../../screens/Desenvolvedor/Profile/EditProfile';

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

            <Screen
            name="EditProfile"
            component={EditProfile}
            />

        </Navigator>
    );
}

export default DeveloperProfile;
