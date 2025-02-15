import React ,{useState,useEffect}from 'react'
import "./home.css"
import axios from 'axios'

const Home = () => {
    const[users,setUsers]=useState([]);
    console.log(users);

    useEffect(()=>{
        axios.get("http://local:8000/users")
        .then(res=>{
            //console.log(res.data);
            setUsers(res.data);
        }).catch(err=>console.log(err))
    })
  return (
    <section id="homeBlock">
        <article>
            <h1>List of USers</h1>
            <div className="createBtn">
                
            </div>
           {
            users && users.length>0?(<table>

            </table>)
           }
        </article>
    </section>
  )
}

export default Home