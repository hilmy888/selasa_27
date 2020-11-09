import { combineReducers, createStore } from 'redux'

const initialState = {
  isloggeIn: false,
  user: '',
}

function auth(state = initialState, action) {
  switch (action.type) {
    case 'logIn': {
      return { ...state, isloggeIn: true }
    }
    case 'logOut': {
      return { ...state, isloggeIn: false }
    }
    case 'toggle': {
      return { ...state, isloggeIn: !state.isloggeIn }
    }
    case 'changeName': {
      return { ...state, user: action.name }
    }
    default:
      return state
  }
}

const reducers = {
  auth,
}

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer)

export default store
