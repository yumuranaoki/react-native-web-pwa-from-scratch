import * as React from 'react';
import { AppRegistry } from "react-native";
import { register } from "./serviceWorker/index";
import Button from './components/button/index'

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello From PWA</h1>
      <Button />
    </div>
  );
}

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });

register()