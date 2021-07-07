import MainNavigator from './navigators/Main';
import { store } from './state/store'
import { Provider } from 'react-redux'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainNavigator />
      </div>
    </Provider>
  );
}

export default App;
