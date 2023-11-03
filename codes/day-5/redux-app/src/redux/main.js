const { legacy_createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')

const initialCounterState = {
    counter: 0
}
const initialNameState = {
    name: ''
}
const counterActionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}
const nameActionTypes = {
    UPDATE: 'UPDATE'
}

const increaseActionCreator = (value) => {
    return {
        type: counterActionTypes.INCREASE,
        data: value
    }
}

const decreaseActionCreator = (value) => {
    return {
        type: counterActionTypes.DECREASE,
        data: value
    }
}

const nameActionCreator = (value) => {
    return {
        type: nameActionTypes.UPDATE,
        data: value
    }
}

// const INCREASE = 'INCREASE'
// const DECREASE = 'DECREASE'

const counterReducer = (state = initialCounterState, action) => {

    switch (action.type) {
        case counterActionTypes.INCREASE:
            return {
                ...state,
                counter: state.counter + action.data
            }
        case counterActionTypes.DECREASE:
            return {
                ...state,
                counter: state.counter - action.data
            }

        default:
            return state

    }
}

const nameReducer = (state = initialNameState, action) => {

    switch (action.type) {
        case nameActionTypes.UPDATE:
            return {
                ...state,
                name: action.data
            }

        default:
            return state

    }
}

const rootReducerMap = combineReducers({
    nameState: nameReducer,
    counterState: counterReducer
})
const loggerMiddleware = createLogger()
const store = legacy_createStore(
    rootReducerMap,
    applyMiddleware(loggerMiddleware)
)

//console.log(store.getState())
//store.dispatch({ type: actionTypes.INCREASE, data: 2 })
store.dispatch(increaseActionCreator(2))
//console.log(store.getState())
//store.dispatch({ type: actionTypes.INCREASE, data: 2 })
store.dispatch(increaseActionCreator(4))
//console.log(store.getState())
//store.dispatch({ type: actionTypes.DECREASE, data: 3 })
store.dispatch(decreaseActionCreator(3))
store.dispatch(nameActionCreator('anil'))
store.dispatch(nameActionCreator('sunil'))

