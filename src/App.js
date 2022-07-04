import axios from 'axios';
import {useState, useEffect} from 'react'
import AddUser from './components/AddUser';
import Header from './components/Header';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([])

useEffect(() => {
  const getUser = async () => {
    const userData = await fetchUsers()
    setUsers(userData)
    console.log(userData)
  }

  getUser();
}, [])

const fetchUsers = async () => {
  const res = await axios.get('http://localhost:3001/users')

  return res.data;
}

const addUser = async (user) => {
  const res = await axios.post('http://localhost:3001/users', user)
  const newUser = res.data

  //Add new user to DB
  setUsers([...users, newUser])
}

 

  return (
    <div className='container'>
      <Header />
      <AddUser onAdd={addUser}/>
      <br></br>
      <Users users={users}/>
     
    </div>
  );
}

export default App;
