import React, { useEffect, useState } from 'react'

const App = () => {
  
  const [data,setData] = useState([{
    name:"shubham"
  }])

  const [userCount,setUserCount] = useState(1)
  

  const addRecord = async() => {
    try {
      
      setUserCount(userCount+1)

      const res = await fetch(`https://swapi.dev/api/people/${userCount}`)
      const jsonData = await res.json()
      setData((pevUserData)=> [...pevUserData,{name:jsonData.name}])
     
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteData = (name) => {
    console.log(name)
    const filterList = data?.filter((user)=>{
      return user.name !== name
    })
    setData(filterList)
  }

  return (
    <div>
        <div>
          <button onClick={addRecord}>Add Record</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Delete Record</th>
              </tr>
            </thead>
            <tbody>
            {
              data?.map((user)=>{
                return (
                  <tr>
                  <td>{user.name}</td>
                  <td ><button onClick={()=>deleteData(user.name)}>Delete</button></td>
                  </tr>
                )
              })
            }
              
            </tbody>
          </table>
        </div>
  </div>
  )
}

export default App