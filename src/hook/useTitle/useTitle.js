import { useEffect } from "react";

const useTitle=title=>{
    const stayName=document.title;

    useEffect(()=>{
        document.title=`TrusToy | ${title}`
    },[title])
}
export default useTitle