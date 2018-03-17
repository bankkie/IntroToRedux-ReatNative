import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware } from 'redux';
import { Provider} from 'react-redux'
import counter from './reducers/counter'
import createSagaMiddleware from 'redux-saga';
import { take, put, race } from 'redux-saga/effects';
import { inc } from './actions'

function *accumulateCunter(){
    let val = 0;
    while(true){
        let {accumulate, accPush} = yield race({
            accumulate: take('ACCUMULATE'),
            accPush: take('ACC_PUSH')
        })
        if(accumulate)
            val++;
        else if(accPush)
            yield put(inc(val))
            val = 0;
    }

}
let sagaMiddleware = createSagaMiddleware();
let store = createStore(counter, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(accumulateCunter)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("root")
)

