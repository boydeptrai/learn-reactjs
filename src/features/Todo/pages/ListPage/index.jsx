import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {

};

function ListPage(props) {
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
    const location = useLocation();
    const history = useHistory();
    const match  = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus,setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search)
        return params.status || 'all'
    })
    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilteredStatus(params.status || 'all')
    },[location.search])

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
        //setFilteredStatus('all')
        const queryParams = {status : 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowCompletedClick =() =>{
        //setFilteredStatus('completed')
        const queryParams = {status : 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowNewClick =() =>{
        //setFilteredStatus('new')
        const queryParams = {status : 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const renderedTodoList = useMemo(()=>{
        return todoList.filter(
            todo =>filteredStatus === 'all' ||filteredStatus=== todo.status )

    },[todoList,filteredStatus]);

    const handleTodoFormSubmit = (values) =>{
        console.log('form submit :',values);
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };
        const newTodoList = [...todoList,newTodo];
        setTodoList(newTodoList);
    }
    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAllClick}>Show All</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default ListPage;