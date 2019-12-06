import React from 'react';
import { Provider } from "react-redux";
import App from './App';

import createStore from './store';
const RootComponent = () => {

    const store = createStore();

    return <Provider store={store}>
        <App/>
    </Provider>

}

export default RootComponent;
