import React, { memo } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTodo } from '../context/TodoContext';
import { useState } from 'react';


function TodoForm() {
    const { dispatch } = useTodo()
    const [todoContent, setTodoContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_TODO",
            value: todoContent
        })
        setTodoContent("")
    }

    const onChangeHandler = (e) => {
        setTodoContent(e.target.value)
    }

    return (
        <div >
            <form style={{ display: "flex" }} onSubmit={handleSubmit} >
                <TextField style={{ marginRight: "20px" }}
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
        </div >

    )
}

export default memo(TodoForm)   