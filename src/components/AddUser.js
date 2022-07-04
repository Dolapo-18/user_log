import React, {useState} from 'react'

const AddUser = ({onAdd}) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    //get current timestamp
    const timestamp = new Date();
    const date = new Date(timestamp)

    


    const onSubmit = e => {
        e.preventDefault()

        if(firstname !== '' && lastname !== '' && email !== '' && age !== '') {
            onAdd({firstname, lastname, email, age, date})
            setFirstname('')
            setLastname('')
            setEmail('')
            setAge('')
        }
       
    }


  return (
    <>
    <form className="add-form" onSubmit={e => onSubmit(e)}>
        <div className="form-control">
            <label>Firstname</label>
            <input type="text" placeholder="firstname" value={firstname} onChange={e => setFirstname(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Lastname</label>
            <input type="text" placeholder="lastname" value={lastname} onChange={e => setLastname(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Email</label>
            <input type="text" placeholder="age" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Age</label>
            <input type="text" placeholder="age" value={age} onChange={e => setAge(e.target.value)}/>
        </div>



        <input type="submit" value='Add User' className="btn btn-block"/>
    </form>
    </>
  )
}

export default AddUser