const requestAPI=(parameter)=>{
    const response=fetch('http://何らかのAPI',parameter)
    .then((response)=>{
        return {
            type:'REQUES_API',
            data:response
        };
    });
};

import shortid from 'shortid';
import * as types from '../types/todo';

//同期アクションクリエーター
export function addTodo(title){
    return {
        type:types.ADD_TODO,
        payload:{
            id:shortid.generate(),
            title,
        },
    };
}

//非同期アクションクリエーター
export function asyncAddTodo(title){
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch(addTodo(title));
        },1000);
    };
}

//　promiseの例
const sleep1000ms=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve();
        },1000)
    });
};
export function addTodo(title){
    return {
        type:types.ADD_TODO,
        payload:{
            id:shortid.generate(),
            title,
        },
    };
}
//promise版
export function asyncAddTodo(title){
    return (dispatch)=>{
        sleep1000ms().then(()=>{
            dispatch(addTodo(title));
        });
    };
}
//Async/Await版
export function asyncAddTodo(title){
    return async(dispatch)=>{
        await sleep1000ms();
        dispatch(addTodo(title));
    };
}

//1つのactionにまとめる
function addTodo(title){
    return{
        type:types.ADD_TODO,
        payload:{
            id:shortid.generate(),
            title,
        },
    };
}
function updateInput(value){
    return{
        type:types.UPDATE_INPUT,
        payload:{
            value,
        },
    };
}
export function addTodoAndClear(title){
    return (dispatch)=>{
        dispatch(addTodo(title));
        dispatch(updateInput(''));
    };
}

export function addUniqueTodo(title){
    return (dispatch,getState)=>{
        const{
            todo:{
                todos,
            },
        }=getState();
    }

    //stateに保存されたTodoに同一のタイトルがあったら登録ずみ
    const isDuplicated=todos.some(todo=>todo.title===title);
    if(isDuplicated){
        return;
    }
    dispatch(addTodo(title))
}