import React from 'react'
import {api , updateData} from '../Service/api'
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from 'react-router-dom';

export default function Edit() {

   const [add, setadd] = useState({"id": '', "name" : '', "user_name" : '', "age" : ''});

   let name , users_named, aged, hello;

   const history = useHistory();
   
   useEffect(() => {

      console.log('useeffect');
      loaddata();

    }, [])

   

  

   const  loaddata = async ()=>{
       console.log('load data')
       const response = await api();
       console.log('response.data = ', response.data)
       setadd(response.data);
   }
   
  const Name = (named)=>{

    name = named;
    console.log(name);
  }

  const user_name = (user_named)=>{
    
    users_named = user_named;
    console.log(users_named)

  }

  const age = (user_age)=>{
    
    aged = user_age;
    console.log(aged);

  }

  const update = async (updataData , id)=>{
      await updateData(updataData,id);
      history.push('/users ')
  }

  
    let {id} = useParams();
    hello = id;
    console.log(hello)

  const clicked = ()=>{
    

    
    console.log('clicked')
    console.log(add);
    add.find((o, i) => {
        console.log("add.find called")
        console.log(o._id , hello)
    if (`${o._id}` === hello) {
        console.log("id =",hello);
        add[i].name = name;
        add[i].user_name = users_named;
        add[i].age = aged;
        console.log(add[i]);
        const temp = add[i]

        update(temp , hello);
        return true; // stop searching
    }

    


  })

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
          <input type="text" onChange={(e)=>{user_name(e.target.value)}}  class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Age</label>
          <input type="text" onChange={(e)=>{age(e.target.value)}} class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" onClick={clicked} type="button">Submit</button>
        </div>
      </form>
    </>
  )
}
