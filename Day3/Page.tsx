import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

interface pageProps {
    index: number,
    title: string,
    translateX: Animated.SharedValue<number>
}

const { width } = Dimensions.get('screen')

const Page: React.FC<pageProps> = ({ index, title, translateX }) => {

    const PAGE_OFFSET = width * index

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value + PAGE_OFFSET }
            ]
        }
    })
    return (
        <Animated.View
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