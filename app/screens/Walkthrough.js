import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import PageContainer from '../components/PageContainer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images, COLORS, SIZES, FONTS } from '../constants'
import background from "../assets/images/login/back.png"
import logo from "../assets/images/login/logo.png"

import Button from '../components/Button'
import RegisterButton from '../components/RegisterButton'

export default function Walkthrough({ navigation }) {
    const [values, setValues] = React.useState({
        username: '',
        password: '',
    })
    const handleChange = (e) => {
        values[e.target.name] = e.target.value
        setValues({ ...values })
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", marginTop: -50 }}>
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'column',

                    }}
                >
                    <Image
                        source={background}
                        style={{
                            width: "100%",
                            height: "58%",

                        }}
                    />
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop:20,
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={logo}
                            style={{
                                marginTop: 20,
                            }}
                        />
                        <View>
                            <Button
                                title="Entrar"
                                onPress={() => navigation.navigate('BottomTabNavigation')}
                                style={{
                                    fontWeight: 'bold',
                                    width: SIZES.width * 0.8,
                                    height: 60,
                                    backgroundColor: "#1E232C",
                                    paddingVertical: 12,
                                    marginTop: 50,
                                }}
                            />
                            <RegisterButton
                                title="Registrar"
                                onPress={() => navigation.navigate('BottomTabNavigation')}
                                style={{
                                    fontWeight: 'bold',
                                    width: SIZES.width * 0.8,
                                    height: 60,
                                    paddingVertical: 12,
                                    marginTop: 10,
                                    borderWidth: 1.2,
                                    borderColor: "#1E232C",
                                }}
                            />

                        </View>
                    </View>
                </View>


            </PageContainer>
        </SafeAreaView>
    )
}
