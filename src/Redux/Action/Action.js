import { GET_DETAILS,POST_DETAILS ,UPDATE_DETAILS, DELETE_DETAILS } from "../type";
import {getstudentsDetails, poststudentsDetails , updatestudentsDetails, deletestudentsDetails} from "../../apis/Request";

const GetAction = ()=>{
    return function(dispatch){
        return getstudentsDetails().then((res)=>{
            console.log("data: ",res)
            
            dispatch({
                type: GET_DETAILS,
                payload: res.data,
            })
        });
    }
};

const PostAction = (req)=>{
    return function(dispatch){
        //for showing alert
        dispatch({
            type: POST_DETAILS,
            payload: false,
        })
        return poststudentsDetails(req).then((res)=>{
            console.log("res data: ",res)
            
            dispatch({
                type: POST_DETAILS,
                payload: true,
            })
        });
    }
};

const UpdateAction = (req,id)=>{
    return function(dispatch){
        //for showing alert
        dispatch({
            type: UPDATE_DETAILS,
            payload: false,
        })
        return updatestudentsDetails(req,id).then((res)=>{
            console.log("update res data: ",res)
            
            dispatch({
                type: UPDATE_DETAILS,
                payload: true,
            })
        });
    }
};

const DeleteAction = (id)=>{
    return function(dispatch){
        //for showing alert
        dispatch({
            type: UPDATE_DETAILS,
            payload: false,
        })
        return deletestudentsDetails(id).then((res)=>{
            console.log("update res data: ",res)
            
            dispatch({
                type: DELETE_DETAILS,
                payload: true,
            })
        });
    }
};

export {GetAction,PostAction, UpdateAction,DeleteAction};