import React from 'react'

const Dashboard = () => {
  const[username,setUsername]=useState('');
  const[mail,setMail]=useState('');
  const[psw,setPsw]=useState('');
  const[gender,setGender]=useState('');
  const[address,setAddress]=useState('');
  const[country,setCountry]=useState('');
  const[file,setFile]=useState('');
  let handleSubmit
  return (
    <div>
      <form action="">
        <input type="text" placeholder='username'/><br/>
        <input type="email" placeholder='Email'/><br/>
        <input type="password" placeholder='password'/><br/>
        <input type="radio" name="gender" /><label htmlFor="">Male</label>
        <input type="radio" name="gender" /><label htmlFor="">Female</label>
        <input type="radio" name="gender" /><label htmlFor="">Other</label>

      </form>
    </div>
  )
}

export default Dashboard