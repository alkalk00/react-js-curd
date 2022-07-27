import React, { useState, useEffect } from 'react'
import {PostAction , UpdateAction} from '../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import GetDataByHooks from '../Hooks/UpdateData';   


const UpdDetails = () => {

    const {id} = useParams();
    console.log("params id",id);
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [regno,setRegno] = useState('')
    const [phone,setPhone] = useState('')

    const dispatch = useDispatch();

    const isUpdate = useSelector(state => state.Reducer.isUpdate);

    const [detailsbyId] = GetDataByHooks(id)
    console.log("user details: ",detailsbyId);
    useEffect(()=>{
        const data = ()=>{
            if(detailsbyId.data){
                setName(detailsbyId.data.name)
                setEmail(detailsbyId.data.email)
                setRegno(detailsbyId.data.regno)
                setPhone(detailsbyId.data.phone)
            }
        }
        data();
    },[detailsbyId.data])

    const nameOpt = (e)=>{
        setName(e.target.value);
    }

    const emailOpt = (e)=>{
        setEmail(e.target.value);
    }

    const regOpt = (e)=>{
        setRegno(e.target.value);
    }

    const phoneOpt = (e)=>{
        setPhone(e.target.value);
    }

    const postData = (e)=>{
        e.preventDefault()
        const fdata = {
            name: name,
            email: email,
            phone: phone,
            regno: regno
        }
        console.log(fdata)
        dispatch(UpdateAction(fdata,id))
    }

    let navigate = useNavigate();
    if(isUpdate){
        alert('Form is updated');
        navigate('/');
    }
    
    const back = ()=>{
        navigate('/');
    }

  return (
    <div>
        <div className='addform pt-3'>
                <h3 className='text-left'>Update Students Details</h3>
                <form>
                    <div class="form-group">
                        <input type="text" defaultValue={name} class="form-control" id="formGroupExampleInput" placeholder='Student Name' onChange={(e) => { nameOpt(e) }} />
                    </div>
                    <div class="form-group">
                        <input type="text" defaultValue={email} class="form-control" id="formGroupExampleInput2" placeholder='Student Email' onChange={(e) => { emailOpt(e) }} />
                    </div>
                    <div class="form-group">
                        <input type="text" defaultValue={regno} class="form-control" id="formGroupExampleInput2" placeholder='Student Registration No.' onChange={(e) => { regOpt(e) }} />
                    </div>
                    <div class="form-group">
                        <input type="text" defaultValue={phone} class="form-control" id="formGroupExampleInput2" placeholder='Student Phone' onChange={(e) => { phoneOpt(e) }} />
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 text-center">
                            <button type='submit' className='btn btn-danger' onClick={(e) => { postData(e) }}>Submit</button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 text-center">
                            <button type='submit' className='btn btn-primary' onClick={back}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default UpdDetails