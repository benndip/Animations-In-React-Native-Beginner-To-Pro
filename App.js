import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  withRepeat
} from 'react-native-reanimated';


const App = () => {

	const SIZE = 100.0

	const progress = useSharedValue(1)
	const scale = useSharedValue(2)
	const borderRadius = useSharedValue(0)

	const reanimatedStyle = useAnimatedStyle(()=>{
		return{
			// opacity: progress.value,
			transform: [
			{ scale: scale.value },
			{ rotate: `${ progress.value * 2 * Math.PI }rad` }
			],
			borderRadius: borderRadius.value
		}
	},[])

	useEffect(()=>{
		progress.value = withRepeat(withTiming(0.5, { duration: 2000 }),-1, true)
		scale.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true)
		borderRadius.value = withRepeat(withTiming(SIZE*0.5, { duration: 2000 }), -1, true)
	},[])

  return (
    <View style={styles.container}>
      <Animated.View style={[{width: SIZE, height: SIZE, backgroundColor: 'blue'},reanimatedStyle]} />
    </View>
  )
}

const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}

})

export default App
