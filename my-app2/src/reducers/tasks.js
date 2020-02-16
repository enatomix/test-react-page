//store
const initialState={
    task:'', //input要素からの入力値を管理 typeがINPUT_TASKであるactionがdispatchされてきた際にtaskに入力値が格納される
    tasks:[]
};

//reducer　actionを受け取り、storeを変更させる
export default function tasksReducer(state=initialState,action){
    switch(action.type){
        case 'INPUT_TASK':
            return{
                ...state,
                task:action.payload.task
            };
        case 'ADD_TASK':
            return{
                ...state,
                tasks:state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}