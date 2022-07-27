import React, { useState } from 'react'
import { PostAction } from '../Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";



const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [regno, setRegno] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useDispatch();

    const isResponse = useSelector(state => state.Reducer.isResponse);

    const nameOpt = (e) => {
        setName(e.target.value);
    }

    const emailOpt = (e) => {
        setEmail(e.target.value);
    }

    const regOpt = (e) => {
        setRegno(e.target.value);
    }

    const phoneOpt = (e) => {
        setPhone(e.target.value);
    }

    const postData = (e) => {
        e.preventDefault()
        const fdata = {
            name: name,
            email: email,
            phone: phone,
            regno: regno
        }
        console.log(fdata)
        dispatch(PostAction(fdata))
    }

    if (isResponse) {
        alert('Form is uploaded');

    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='addform pt-3'>
            <div className='center'>
                <h3 className='text-left'>Add Students Details</h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="formGroupExampleInput"
                         placeholder='Student Name' onChange={(e) => { nameOpt(e) }}  />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="formGroupExampleInput2"
                         placeholder='Student Email' onChange={(e) => { emailOpt(e) }} />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="formGroupExampleInput2"
                         placeholder='Student Registration No.' onChange={(e) => { regOpt(e) }} />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="formGroupExampleInput2"
                         placeholder='Student Phone' onChange={(e) => { phoneOpt(e) }} />
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 text-center">
                            <button type='submit' className='btn btn-primary' onClick={(e) => { postData(e) }}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form