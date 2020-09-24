import React from 'react';
import './Appbody.css';
import Input from './Input.js';
import TodoList from './TodoList';

function Appbody(){

    return (
        <div className="appbody">
           <TodoList />
        </div>
    );
}

export default Appbody;