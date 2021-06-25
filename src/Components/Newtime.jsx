import React, {useState} from 'react';



var date = new Date();
// var todayTime = date.toLocaleTimeString();

const Currenttime = () => {
    const [time, setTime] = useState( date.toLocaleTimeString());
    const NewTime = () => {
        var date = new Date();
        setTime(date.toLocaleTimeString());
        console.log("hi");

    }
    return (
    <>
    <h1>{time}</h1>
    <button onClick={NewTime}>New Time</button>
    </>
    );



}
export default Currenttime;


