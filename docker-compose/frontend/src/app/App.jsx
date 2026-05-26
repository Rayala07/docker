import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUsers(res.data.users);
    })
      .catch((err) => {
        console.error("Error fetching users", err)
      })
  }, [])


  return (
    <>
      <h1>Users List</h1>

      <div>
        {users && users.map((user, idx) => (
          <div key={idx}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App