import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTodo } from '../context/TodoContext';
import { useState } from 'react';
import TodoList from './TodoList';


export default function TodoForm() {
    const { dispatch, todo } = useTodo()
    const [todoContent, setTodoContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_TODO_TO_TODOS",
            todo: todo
        })
    }

    const onChangeHandler = (e) => {
        setTodoContent(e.target.value)
        dispatch({
            type: "ADD_TODO",
            value: todoContent
        })
    }

    return (
        <div >
            <form style={{ display: "flex" }} onSubmit={handleSubmit} >
                <TextField style={{marginRight:"20px"}}
                    value={todoContent}
                    onChange={onChangeHandler}
                    size="small"
                    color="secondary"

                />
                <Typography />
                <Button
                    type="submit"
                    variant="contained"
                    color='warning'
                >
                    Add
                </Button>
            </form>
            <TodoList />
        </div >

    )
}
