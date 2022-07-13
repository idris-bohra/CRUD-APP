import React from 'react'
import { useState } from 'react'
import {adduser} from '../Service/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function AddUser() {

  const [add, setadd] = useState({"id": '', "name" : '', "user_name" : '', "age" : ''});

  const history = useHistory();
  const Name = (named)=>{
      add.name = `${named}`
      console.log(add);
  }

  const user_name = (user_named)=>{
      add.user_name = `${user_named}`
      console.log(add.user_name);

  }

  const age = (user_age)=>{
      add.age = `${user_age}`
      console.log(add.age);

  }

  const clicked = async ()=>{
      // console.log(add);

      await adduser(add);
      history.push('./users');


  }



  return (
    <>
      <form className='container btn-dark p-5 my-5'>
    
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" onChange={(e)=>{Name(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">User-Name</label>
          <input type="text"  onChange={(e)=>{user_name(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Age</label>
          <input type="text"  onChange={(e)=>{age(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" onClick={clicked} type="button">Submit</button>
        </div>
      </form>
    </>
  )
}
