import axios from 'axios';

const url2 = "http://localhost:8000"
const url3 = "http://localhost:8000/add"

export async function api(id) {

  if(!id)
  {
    id='';
  }
  return (
    await axios.get(`${url2}/${id}`)
  )
}

export async function adduser(users) {
  return (
    await axios.post(url3, users)
  )
}

// export async function adduser(users) {
//   return (
//     await axios.post(url , users)
//   )
// }

export async function updateData(put,id) {

  // let getring = path.join(`${url2}` , `${id}`)
  console.log(`${url2}/${id}`)
  return (
    
    await axios.put(`${url2}/${id}`, put)
    
  )
}

export async function DeleteData(id) {
  return (
    await axios.delete(`${url2}/${id}`)
  )
}




