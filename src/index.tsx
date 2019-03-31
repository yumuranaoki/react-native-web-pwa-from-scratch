import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { register } from "./serviceworker";

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello From PWA</h1>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

register()