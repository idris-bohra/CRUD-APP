import React from 'react'
import { useState , useEffect} from 'react';
import { DeleteData } from '../Service/api';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import {api} from '../Service/api'

export default function Users() {
  

  const [users, setusers] = useState([]);

  const edit = (e,id)=>{
    console.log('edited' , e.target);
    console.log("id = ",id)
  }

  const deletes = async(e,id)=>{

    await DeleteData(id);
    await getAllUsers();
    // window.location.reload(false); // for refreshing the page

  }

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async()=>{
      const response = await api();
      setusers(response.data);
  }
  
  return (

    <>
      <table class="table table-light my-5" style={{"padding" : "50px"}}>
        <thead>
          <tr class="table-light">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User-Name</th>
            <th scope="col">Age</th>
            <th scope="col">Oprations</th>
            
          </tr>
        </thead>
        <tbody>
          {
            users.map((users,i)=>(
                <tr class="table-light">
                  <th scope="col">{i+1}</th>
                  <th scope="col">{users.name}</th>
                  <th scope="col">{users.user_name}</th>
                  <th scope="col">{users.age}</th>
                  <th>
                    <Link to = {`edit/${users._id}`}>
                      <button  onClick={(e)=>{edit(e,users._id)}} style={{"width" : "50px"}} class="btn btn-dark col">Edit</button>
                    </Link>
                    <Link>
                      <button onClick={(e)=>{deletes(e,users._id)}} style={{"width" : "70px"}} class=" mx-3 btn btn-dark ">Delete</button> 
                    </Link>
                  </th>
                  
                </tr>
            ))
          }
        </tbody>
      </table>
    </>
   
  )
}
