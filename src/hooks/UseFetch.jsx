import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/api";

const usefetch=(url)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setLoading(true);
        setError(null);
        setData(null);

        fetchDataFromApi(url).then((res)=>{
            // setLoading(false);
            const setWrap=()=>{
                setLoading(false);
                setData(res);
            }
            setTimeout(()=>setWrap(),1000);
            
        })
        .catch((err)=>{
            setLoading(false);
            setError("Something went wrong..."+err);
        })
    },[url]);
    return {data,loading,error};
}
export default usefetch;