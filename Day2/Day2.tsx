import React from 'react'
import { View, StyleSheet } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';

import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'

const SIZE = 100
const CIRCLE_RADUIS = SIZE * 2

type contextType = {
    translateX: number
    translateY: number
}

const Day2 = () => {

    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, contextType>(
        {
            onStart: (event, context) => {
                context.translateX = translateX.value
                context.translateY = translateY.value
            },
            onActive: (event, context) => {
                translateX.value = event.translationX + context.translateX
                translateY.value = event.translationY + context.translateY
                // console.log([translateX.value, translateX.value])
            },
            onEnd: () => {

                const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
                if (distance < (CIRCLE_RADUIS + SIZE / 2)) {
                    translateX.value = withSpring(0)
                    translateY.value = withSpring(0)
                    console.log([translateX.value, translateX.value])
                }
            }
        }
    )

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                }
            ]
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.largeSquare}>
                <PanGestureHandler onGestureEvent={panGestureEvent}>
                    <Animated.View style={[styles.box, rStyle]} />
                </PanGestureHandler>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(0,0,256,0.5)',
        borderRadius: 10
    },
    largeSquare: {
        width: SIZE * 4,
        height: SIZE * 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZE * 2,
        borderWidth: 5,
        borderColor: 'rgba(0,0,256,0.5)'
    }
})

export default Day2