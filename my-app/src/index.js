import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Profile=(props)=>{
    return(
        <ul>
            <li>名前：{props.name}</li>
            <li>誕生日：{props.birthDay}</li>
        </ul>
    )
};

const profile={
    name:'坂本',
    birthDay:'1u78/002/20'
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)