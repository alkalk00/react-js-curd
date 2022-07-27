import React, { useEffect } from 'react'
import { GetAction, DeleteAction } from '../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../Components/form.css'
import Nvabar from './Nvabar'
import Form from './AddForm'

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector(state => state.Reducer.students);
  const isdelete = useSelector(state => state.Reducer.isdelete);

  console.log("data: ", responseData);

  useEffect(() => {
    dispatch(GetAction());
  }, [dispatch]);

  if(isdelete){
    alert('The sutudent data is deleted')
    window.location.reload(false);
  }

  const result = responseData ? responseData.map((data, index) => {
    return <tr key={index}>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.regno}</td>
      <td>
        <Link to={`/updform/${data.id}`}>
          <span className='edit material-icons text-orange'>edit</span>
        </Link>
      </td>
      <td>
          <span className='delete material-icons text-danger' onClick={() => dispatch(DeleteAction(data.id))}>delete</span>
      </td>
    </tr>
  }) : null
  return (
    <div className='container'>
      
      <h1 className='text-center pb-3'>Students CURD Operation</h1>
      <Form/>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Registration No.</th>
            <th scope="col">Edit</th>
            <th scope="col">Delelte</th>
          </tr>
        </thead>
        <tbody>
          {result}
        </tbody>
      </table>
    </div>
  )
}

export default Home