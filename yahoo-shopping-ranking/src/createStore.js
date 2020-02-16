import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import * as reducers from './reducers';

//historyはsrc/index.jsから渡すようにする
export default function createStore(history){
    return reduxCreateStore(
         //1つのreducerで完結することはほぼないので最初からcombinereducerを使う実装にしておく
        combineReducers({
            ...reducers,
            //react-router-reduxのreducer
            router:routerReducer,
        }),
        //redux middlewareにredux-loggerを設定
        applyMiddleware(
            logger,
            thunk,
            //react-router-reduxのredux middleware
            routerMiddleware(history)
        )
    );
}