import { useState } from "react";
import "./style.css"

const Digital_Clock = ()=>{
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time)

    const updateTime = ()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime,1000);
    return(
        <>
        <h1 className="clock">{ctime}</h1>
        </>
    )
}
export default Digital_Clock;