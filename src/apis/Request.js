import axios from 'axios';

export async function Request(url,method,headers,par){
    //to check if data present or not
    return par ? axios({
        url: url,
        method: method,
        headers: headers,
        data: par,
        // timeout: 1000
    }) : axios({
        url: url,
        method: method,
        headers: headers,
        data: {},
        // timeout: 1000
    })
}

const getstudentsDetails = ()=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("http://localhost:3006/students","GET",headers,{},)
}

const poststudentsDetails = (data)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("http://localhost:3006/students","POST",headers,data,)
}

const getstudentsDetailsById = (id)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("http://localhost:3006/students/"+id,"GET",headers,)
}

const updatestudentsDetails = (data,id)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("http://localhost:3006/students/"+id,"PUT",headers,data,)
}

const deletestudentsDetails = (id)=>{
    const headers ={
        "Content-Type": "application/json",
    }
    return Request("http://localhost:3006/students/"+id,"DELETE",headers    ,)
}

export {getstudentsDetails,poststudentsDetails, getstudentsDetailsById, updatestudentsDetails ,deletestudentsDetails};