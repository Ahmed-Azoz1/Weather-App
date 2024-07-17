import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { View, Text } from 'react-native';


// const App = () => {
//   return (
//       <View className="flex-1 justify-center items-center bg-blue-500">
//         <Text className="text-white text-lg">
//           Hello, NativeWind!
//         </Text>
//       </View>
//   );
// };

// export default App;

