import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',

        },
        {
            id: 2,
            title: 'Code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState('all')

    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];
        console.log(todo, idx)

        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }

        // update todoList
        setTodoList(newTodoList)

    }
    const handleShowAllClick = () =>{
        setFilteredStatus('all')
    }
    const handleShowCompletedClick =() =>{
        setFilteredStatus('completed')
    }
    const handleShowNewClick =() =>{
        setFilteredStatus('new')
    }

    const renderedTodoList = todoList.filter(
        todo =>filteredStatus === 'all' ||filteredStatus=== todo.status )
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default TodoFeature;