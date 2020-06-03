import React from 'react';
import {ProxyObj} from 'subx/build/types';
import {Spin} from 'antd';

class App extends React.Component<{store: ProxyObj}> {
  render() {
    const store = this.props.store;
    return <>{store.ready ? <Main store={store} /> : <Spin size="small" />}</>;
  }
}

class Main extends React.Component<{store: ProxyObj}> {
  render() {
    return 'Main';
  }
}

export default App;
