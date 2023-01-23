import {createStore,combineReducers,applyMiddleware } from 'redux';
// import {configureStore} from '@reduxjs/toolkit';
import userReduser from './reducers/userReducer';
import cartReducer from './reducers/cart.reducer';
import tokenReducer from './reducers/tokenReducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
    user: userReduser,
    cart: cartReducer,
    token: tokenReducer
})
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer
    ,applyMiddleware(logger));

export const persistor = persistStore(store)

export default store;


