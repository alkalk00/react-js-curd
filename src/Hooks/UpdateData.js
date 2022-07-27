import { useEffect, useState } from "react";
import { getstudentsDetailsById } from "../apis/Request";

export default (props) => {
    const [detailsbyId, setdetailsbyId] = useState({})
    const GetDataByHooks = (requistId)=>{
            return getstudentsDetailsById(requistId).then((res)=>{
                console.log("data: ",res)
                setdetailsbyId(res)
            })
    };
    useEffect(()=>{
        GetDataByHooks(props)
    }, [])

    return [detailsbyId]
}
