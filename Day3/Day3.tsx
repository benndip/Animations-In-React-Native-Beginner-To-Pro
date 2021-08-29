import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated, { useAnimatedGestureHandler, useSharedValue } from 'react-native-reanimated'
import Page from './Page'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'

const titles = ["what's", "up", "mobile", "devs"]

const Day3 = () => {

    const translateX = useSharedValue(0)

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onStart: () => { },
        onActive: (event) => {
            translateX.value = event.translationX
            console.log(translateX.value)
        },
        onEnd: () => { }
    })

    return (
        <View style={styles.container}>
            <PanGestureHandler onGestureEvent={panGestureEvent}>
                <Animated.View style={{ flex: 1, flexDirection: 'row' }}>
                    {
                        titles.map((tile, index) => {
                            return <Page
                                key={index.toString()}
                                index={index}
                                title={tile}
                                translateX={translateX}
                            />
                        })
                    }
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Day3
