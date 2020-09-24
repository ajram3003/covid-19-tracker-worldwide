import React, {useState, useEffect} from 'react';
import { Input , Button, FormControl, MenuItem, Select} from '@material-ui/core';
import './TodoList.css';
import Todo from './Todo';


function TodoList() {

    const [todos,setTodos] =  useState('');
    
    const [input,setInput] = useState('');

    // useEffect(()=>{
    //     db.collection('todos').onSnapShot(snapshot=>{
    //         setTodos(snapshot.docs.map(doc=>{
    //             return doc.data().todo;
    //         }));
    //     });
    // },[])

    function onchangetodo() {
        setTodos([...todos,input]);
        setInput('');
   }

   function onchange(e){
    setInput(e.target.value);
   }

    return (
        <div className="app__body">
           
{/*             
            <Input id="nonid"  value={input} type="text" onChange={e => setInput(e.target.value)} placeholder="Todo..."/>
          
            <Button   disabled={!input} type="submit" onClick={onchangetodo}  color="primary">
            submit
            </Button>
            
            
            {!todos ? null : todos.map((todo,index,todos)=>(
              
                  
                  <Todo key={index+1} value={todo}/>
              
          ))}

          <FormControl className="app__dropdown">
              <Select variant="outlined" value='abc'>
                  <MenuItem value="Light">Light</MenuItem>
                  <MenuItem>Sound</MenuItem>
                  <MenuItem>Lighness</MenuItem>
                  <MenuItem>Darkness</MenuItem>
              </Select>
          </FormControl>
           */}


          <FormControl className="app__dropdown">
              <Select variant="outlined" value='abc'>
                  <MenuItem value="Light">Light</MenuItem>
                  <MenuItem>Sound</MenuItem>
                  <MenuItem>Lighness</MenuItem>
                  <MenuItem>Darkness</MenuItem>
              </Select>
          </FormControl>

        </div>
        
    );
}

export default TodoList
