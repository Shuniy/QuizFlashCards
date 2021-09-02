// creating store
import { createStore, combineReducers, applyMiddleware } from 'redux';

// adding redux persist to store the redux-store in async-storage
import { persistStore, persistReducer } from 'redux-persist';

// adding AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// https://github.com/rt2zz/redux-persist#state-reconciler
// autoMergeLevel1 will skip the merge if substates are changed and will only load with
// incoming change, while autoMergeLevel2 will merge the incoming state with initialState
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// importing reducer
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { decks } from '../reducers';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['decks'],
};

const decksPersistConfig = {
  key: 'decks',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

// creating rootReducer with persist reducer
const rootReducer = combineReducers({
  decks: persistReducer(decksPersistConfig, decks),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// creating store
export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
export const persistor = persistStore(store);
