import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {routerReducer,routerMiddleware} from 'react-router-redux';
import tasksReducer from '../reducers/tasks';
import logger from 'redux-logger';

//historyはsrc/index.jsから渡すようにする
export default function createStore(history){
    //reducerとmiddlewareをセットしてstoreを生成する関数を提供(実際のstore生成はsrc/index.jsで行う)
    return reduxCreateStore(
        //ルーティングのためのreducerを用いるために、tasksreducerと合成
        combineReducers({
            //tasksreducerをtasksというkeyに割り当てる
            tasks:tasksReducer,
            //react-router-reduxのreducer
            router:routerReducer,
        }),
        applyMiddleware(
            logger,
            //react-router-reduxのredux middleware　reduxのaction経由でルーティングが制御できるようになる
            routerMiddleware(history)
        )
    );
}