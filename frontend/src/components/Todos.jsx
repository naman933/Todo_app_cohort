export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div className="m-5 items-center justify-center">
                <li className="font-semibold text-lg pb-3 font-poppins">{todo.title}</li>
                <button className="border-2 font-semibold text-xs p-2 rounded-full items-center justify-center" onClick={()=>{
                    fetch("http://localhost:3000/completed",{
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id,
                        }),
                        headers:{
                            "Content-Type": "application/json"
                        }
                    }).then(async function(res){
                        const json = await res.json();
                        console.log("Todo is updated!!")
                    })
                }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}