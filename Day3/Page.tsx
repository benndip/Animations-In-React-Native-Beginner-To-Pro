import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

interface pageProps {
    index: number,
    title: string,
    translateX: Animated.SharedValue<number>
}

const Page: React.FC<pageProps> = ({ index, title, translateX }) => {

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value }
            ]
        }
    })
    return (
        <View
            style={[styles.container, { backgroundColor: `rgba(0,0,256,0.${index + 2})` }, rStyle]}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    }
})

export default Page