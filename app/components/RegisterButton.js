import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const RegisterButton = (props) => {
    const enabledBgColor = props.color || COLORS.primary
    const disabledBgColor = COLORS.secondaryWhite
    const bgColor = props.disabled ? disabledBgColor : enabledBgColor
    const register = props.register
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                ...styles.btn,
                ...props.style,
            }}
        >
            <Text
                style={{
                    ...FONTS.body3,
                    color: "black"
                }}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding3,
        borderColor: COLORS.primary,
        borderRadius: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default RegisterButton
