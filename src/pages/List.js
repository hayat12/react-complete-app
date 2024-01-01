import React, { useState, useTransition } from 'react'
import TextInput from '../components/TextInput'
function List() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([])
    const LIST_SIZE = 20000;

    const [isPending, startTransition] = useTransition();

    const handleChange = (event) => {
        setInput(event.target.value);

        startTransition(()=>{
            const l = [];
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(event.target.value);
            }
            setList(l)
            console.log(list)
        })
    }
    return (
        <div>
            <TextInput initialValue={input} handleInput={handleChange}/>
            {list.map((n, i)=><p key={i.toString()}>{n}</p>)}
        </div>
    )
}

export default List