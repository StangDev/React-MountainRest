import React, {Component} from 'react';
import { Provider,connect  } from 'react-redux';
import {createStore,applyMiddleware,combineReducers,} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react';
import {reduxifyNavigator,createReactNavigationReduxMiddleware,createNavigationReducer,} from 'react-navigation-redux-helpers';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import MyCombineReducers from './src/reducers'; 

/// Navigation
import routes from './routes'



console.disableYellowBox = true;
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 
 };

//const AppNavigator = createStackNavigator(routes);


const reducers = combineReducers(MyCombineReducers);
const pReducer = persistReducer(persistConfig, reducers);
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const App = reduxifyNavigator(routes, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(pReducer, applyMiddleware(middleware), );
const persistor = persistStore(store);

export default class Root extends Component {

 
  render() {
    console.log(store.getState());
    
       return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppWithNavigationState />
          </PersistGate>
        </Provider>
    
    );
   
  }
}

