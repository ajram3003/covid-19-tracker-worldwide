import React from 'react';
import {List,ListItem,ListItemText} from '@material-ui/core';
import './Todo.css';

function Todo({key,value}) {
    return (
        <List className="todo">
            <ListItem>
                <ListItemText primary={key} secondary={value} />
            </ListItem>
        </List>
   
    )
}

export default Todo
