import React from 'react';
import './App.css';
import ItemsList from "./components/ItemsList";
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";

function App() {
    const store = configureStore();
    console.log(store);

    return (
        <Provider store={store}>
            <div className="App">
                <ItemsList/>
            </div>
        </Provider>
    );
}

export default App;
