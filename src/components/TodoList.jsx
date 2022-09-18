import React from 'react'
import { useTodo } from '../context/TodoContext'

export default function TodoList() {

    const { todos } = useTodo()
    let tTodos = []
    return (
        <div>
            {JSON.stringify(todos.then(data => {
                data.map(todo => {
                    tTodos = [...JSON.stringify(todo)]
                })
            }))}

            {console.log(tTodos)}
        </div>
    )
}
