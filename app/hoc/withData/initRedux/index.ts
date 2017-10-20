import {
  createStore,
  applyMiddleware,
  Store,
  Reducer,
  combineReducers,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ApolloClient } from 'react-apollo'
import { once, assocPath } from 'ramda'
//import createSagaMiddleware from 'redux-saga'

import { reducers, RootState } from '~/modules'

type InitialState = {
  apollo: { data: object }
}
type RootStateWithApollo = RootState & InitialState
type ReduxStore = Store<RootStateWithApollo>
type RootReducer = Reducer<RootStateWithApollo>

//https://github.com/goblindegook/dictionary-react-redux-typescript/blob/master/src/store.ts

const createInitialState = (apolloData: object) =>
  assocPath(['apollo', 'data'], apolloData, {}) as InitialState

function create(apollo: ApolloClient, apolloData?: object): ReduxStore {
  const rootReducer: RootReducer = combineReducers({
    ...reducers,
    apollo: apollo.reducer(),
  })

  //  const sagaMiddleware = createSagaMiddleware();
  //const sagaMiddleware = createSagaMiddleware()
  // const middlewares = [apollo.middleware(), sagaMiddleware]
  const middlewares = [apollo.middleware()]

  const initialState = apolloData ? createInitialState(apolloData) : {}

  const store = createStore(
    rootReducer,
    initialState as RootStateWithApollo,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  return store
}

export const initRedux: typeof create = process.browser ? create : once(create)
