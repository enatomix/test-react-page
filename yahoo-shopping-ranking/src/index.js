import React from 'react';
import ReactDOM from 'react-dom';
/*  createStore.jsに移動
import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import * as reducers from './reducers';
*/
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import createStore from './createStore';

//historyのインスタンスを生成
const history=createBrowserHistory();

//storeの生成
const store=createStore(history);

ReactDOM.render(
    //storeをappコンポーネントに紐付け
    <Provider store={store}>
        {/*
        Linkコンポーネントなどが動作するように
        react-router-domのrouterではなく、react-router-reduxのconnectedRouterを使う
         */}
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);