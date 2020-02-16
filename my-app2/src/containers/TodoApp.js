import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import {inputTask,addTask} from '../actions/tasks';


//storeにあるtask,tasksというstateをpropsに渡す
function mapStateToProps({tasks}){
    return {
        task:tasks.task,
        tasks:tasks.tasks
    };
}

//該当のactionをdispatchさせる関数をpropsに渡す
function mapDispatchToProps(dispatch){
    return{
        addTask(task){
            dispatch(addTask(task));
        },
        inputTask(task){
            dispatch(inputTask(task));
        },
        redirectToError(){
            dispatch(push('/error'));
        }
    };
}

//TodAppコンポーネントにはpropsとしてtask,tasks,addTask,inputTaskが渡される
export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);