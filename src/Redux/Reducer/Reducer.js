import { POST_DETAILS,GET_DETAILS,UPDATE_DETAILS,DELETE_DETAILS } from "../type";

const initialState = {
    students:[],
    isResponse : false,
    isUpdate: false,
    isdelete: false
}

const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_DETAILS:
            return{
                students: action.payload
            }
        case POST_DETAILS:
            return{
                isResponse: action.payload
            }
        case UPDATE_DETAILS:
            return{
                isUpdate: action.payload
            }
        case DELETE_DETAILS:
            return{
                isdelete: action.payload
            }
        default:
            return state;
    }
};

export default Reducer;