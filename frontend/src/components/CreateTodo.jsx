import { useState } from "react";
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div className='flex flex-col m-5 border-r-black'>
        <input className='border-2 font-semibold mb-2'type="text" placeholder="title" onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input>
        <input className="border-2 font-semibold mb-2" type="text" placeholder="description" onChange={(e) =>{
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input>

        <button className='text-white bg-black border-2 px-5 py-1 text-center font-semibold rounded-full'onClick = {() =>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "Content-Type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add</button>
    </div>
}