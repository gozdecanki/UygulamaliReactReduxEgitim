import React,{useState} from 'react'

export default function CreateTask(props) {

    const [task, setTask] = useState(
        {
            title:'',
            content:''
        }
    )

    function detectChange(event){
         const {name, value}= event.target;
         setTask((prevTask)=>{
            return{
                ...prevTask,
                [name]:value
            }
         }
        
        )
    }

    function submitTask(event){
        props.onAdd(task);
        setTask({
            title:'',
            content:''
        })
       event.preventDefault();
    }

  return (
    <div className='todoDivArea'>
        <form className='todoDiv'>
            <input type="text" className='form-control todoText mb-3'
             name='title' placeholder='Başlık'
             value={task.title}
             onChange={detectChange}/>

             <textarea className="form-control todoText mb-3" name="content" 
             rows={3} placeholder='İşinizi yazınız'
             value={task.content}
             onChange={detectChange}></textarea>

             <button className='btn btn-primary todoButton'
             onClick={submitTask}>Ekle</button>
        </form>
    </div>
  )
}
