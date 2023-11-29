import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import FullPost from "./FullPost"
import Post from "./Post"

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Post}
                    options={{ title: "Новостная лента" }}
                />
                <Stack.Screen
                    name="FullPost"
                    component={FullPost}
                    options={{ title: "Post" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
