import React from 'react'


export const ShowTask = ({tasklist,setTasklist,task,setTask}) => {

    const handleDelete = (id) => {
        setTasklist(tasklist.filter(todo => todo.id !== id));
        // setTask(null);
    }
    
    const handleEdit = (id) => {
        const editedTask = tasklist.find(todo => todo.id === id);
        setTask(editedTask);
        console.log(editedTask);
    }
   const handleAllDelete = () => {
    setTasklist([]);
    setTask({});
   }
 
  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button onClick ={handleAllDelete} className='clearAll'>Clear All</button>
            {/* onClick={() =>setTasklist([])}  */}
        </div>

        <ul>
            {tasklist.map((todo) =>(
            <li key={todo.id}>
                <p> 
                    <span className='name'>{todo.name}</span>
                    <span className='time'>{todo.time}</span>
                </p>
                <i class="bi bi-pencil-square" onClick={()=> handleEdit(todo.id)}></i>
                <i class="bi bi-trash" onClick={()=> handleDelete(todo.id)}></i>
            </li>
            ))}
        </ul>
    </section>
  )
}
