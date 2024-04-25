import React from 'react';

import TelaForm from './src/telas/TelaForm';
import TelaList from './src/telas/TelaList';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Button, Icon } from 'react-native-elements';
import { LivrariaProvider } from './src/context/AnimesProvider';
import MembrosDupla from './src/telas/MembroAnimaria';
import TelaDetalhes from './src/telas/TelaDetalhes'; 
import MembroAnimaria from './src/telas/MembroAnimaria';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AnimesProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="TelaList"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#375687", 
                        },
                        headerTintColor: "white",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                        headerRightContainerStyle: {
                            marginRight: 10,
                        },
                    }}
                >
                    <Stack.Screen
                        name="TelaList"
                        component={TelaList}
                        options={({ navigation }) => ({
                            title: "Animaria",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("TelaForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={30} color="white" />}
                                />
                            ),
                        })}
                    />
                    <Stack.Screen name="MembroAnimaria" component={MembroAnimaria} options={{ title: "Sobre o Membro" }}/>
                    <Stack.Screen name="TelaDetalhes" component={TelaDetalhes} options={{ title: "Detalhes do anime" }}/>
                    <Stack.Screen name="TelaForm" component={TelaForm} options={{ title: "Formulario do Anime" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </AnimesProvider>
    );
}