import {createStore} from 'redux';

//store
const initialState={
    tasks:[]
};

//reducer
function tasksReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_TASK':
            return{
                ...state,
                tasks:state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}

//store生成
const store=createStore(tasksReducer);


function handleChange(){
    console.log(store.getState())
}

const unsubscribe=store.subscribe(handleChange)


//action creater
const addTask=(task)=>({
    type:'ADD_TASK',
    payload:{
        task
    }
});

console.log(store.getState(),'a');


store.dispatch(addTask('Storeを学ぶ'));
