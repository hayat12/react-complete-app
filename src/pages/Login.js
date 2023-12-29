import React from 'react'
import { useInput } from '../hooks/useInput'
import TextInput from '../components/TextInput';
import Button from '../components/Button';

function Login() {
  const [username, invalidUsername, usernameMessage, setUsername] = useInput('', true);
  const [password, invalidPassword, passwordMessage, setPassword] = useInput('', true);
  // const handleInput = (value) => {}

  const onLogin = () => {
    console.log(username, password)
  }

  return (
    <div className='container'>
      <div className='text-center'><h1 className="h3 mb-3 fw-normal">Please sign in</h1></div>
      <div className='row'>
        <div className='col-12'>
          <TextInput name={'username'} placeholder='Username' initialValue={username} handleInput={(event) => setUsername(event.target.value)} />
          {invalidUsername && <small className='text-danger'>{usernameMessage}</small>}
        </div>
        <div className='col-12 mt-2'>
          <TextInput name={'password'} placeholder='Password' initialValue={password} handleInput={(event) => setPassword(event.target.value)} />
          {invalidPassword && <small className='text-danger'>{passwordMessage}</small>}
        </div>
          <div className='col-12 mt-2'><Button text={'Sign in'} handleButton={onLogin} /></div>
      </div>
    </div>
  )
}

export default Login