import React from 'react'
import {NativeBaseProvider} from 'native-base'
import HomeContainer from './screens/Home/Home'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NativeBaseProvider>
        <HomeContainer />
      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}

export default App
