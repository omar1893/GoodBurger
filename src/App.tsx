import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <AppRouter />
        </div>
    </Provider>
  );
}

export default App;
