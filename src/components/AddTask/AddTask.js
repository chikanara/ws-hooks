import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState("")
    return (
        <div className='add'>
            <input type="text" onChange={e => setText(e.target.value)} value={text}/>
            <button onClick={() => {addTask(text);setText("")}}>Add Task</button>
        </div>
    )
}

export default AddTask
