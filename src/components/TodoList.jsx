import React, { memo } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoList() {

    const { todos } = useTodo()

    return (
        <div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.content}</p>
                        <hr />
                    </div>

                )
            })}

        </div>
    )
}

export default memo(TodoList)