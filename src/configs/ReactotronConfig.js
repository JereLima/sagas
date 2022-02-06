import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux';


const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({host: '192.168.1.130'}) // controls connection & communication settings
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  }) // add all built-in react native plugins
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect(); // let's connect!

tron.clear();

console.tron = tron;

// Reactotron.onCustomCommand('clearStorage', async () => {
//   const keys = await AsyncStorage.getAllKeys();
//   await AsyncStorage.multiRemove(
//     keys.filter(key => key !== '@REACTOTRON/clientId'),
//   );
//   console.tron.log('AsyncStorage cleared by custom command in Reactotron');
// });

// Reactotron.onCustomCommand('showStorage', async () => {
//   const keys = await AsyncStorage.getAllKeys();
//   const storage = await AsyncStorage.multiGet(keys);

//   console.tron.log(storage);
// });

// Reactotron.onCustomCommand('showAppStorage', async () => {
//   const keys = await AsyncStorage.getAllKeys();
//   const storage = await AsyncStorage.multiGet(keys);
//   const parsedAuth = {};

//   storage
//     .filter(([key]) => key !== '@REACTOTRON/clientId')
//     .forEach(([key, data]) => {
//       try {
//         parsedAuth[key] = JSON.parse(data);
//       } catch (err) {
//         parsedAuth[key] = data;
//       }
//     });

//   console.tron.log(parsedAuth);
// });

export default tron;
