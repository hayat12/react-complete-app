import React, { useEffect, useState } from 'react'

function TextInput({initialValue="", placeholder="Text", handleInput, required=false, inputType="text", name="text"}) {
  const [value, setValue] = useState("");
  useEffect(()=>{
  setValue(initialValue)
  },[initialValue])
  return (
    <input type={inputType} onChange={handleInput} className="form-control" value={value || ""} name={name} placeholder={placeholder}/>
  )
}

export default TextInput