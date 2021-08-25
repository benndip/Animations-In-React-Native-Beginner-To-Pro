import React from 'react'
import { View, Text } from 'react-native'

const titles = ["what's", "up", "mobile", "devs"]

const Day3 = () => {
    return (
        <View>
            {
                titles.map((tile, index) => {
                    return <View key={index.toString()} />
                })
            }
        </View>
    )
}

export default Day3
