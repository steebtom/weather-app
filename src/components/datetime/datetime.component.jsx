import React from "react";



const Datatime = () => {

    const date = new Date;

    return(
        <div className="date-time">
            {`${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`}
        </div>
    )
}

export default Datatime;