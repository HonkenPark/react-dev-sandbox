import React, {memo} from "react";

const Child = ({name, callMe}) => {
    window.alert('Rendered Child Component!!');
    return(
        <div style={{border: '2px solid powderblue', padding: '10px'}}>
            <h3>Child</h3>
            <p>name: {name}</p>
            <button onClick={callMe}>Start Calling</button>
        </div>
    );
};

export default memo(Child);