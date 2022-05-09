/**
 * @format
 */

 import { AppRegistry, LogBox, } from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';


LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs(['VirtualizedLists']);
LogBox.ignoreLogs(['VirtualizedLists', 'Warning:...']);
console.reportErrorsAsExceptions = false;




AppRegistry.registerComponent(appName, () => App);
