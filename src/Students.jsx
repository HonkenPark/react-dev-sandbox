import React from "react";

const Student = ({name, dispatch, id, isHere}) => {
    return(
        <div>
            <span style={{
                textDecoration: isHere ? 'line-through' : 'none',
                color: isHere ? 'gray': 'black',
            }}
            onClick={()=>{
                dispatch({type: 'mark', information: { id }});
            }}
            >
                {name}
            </span>
            <button onClick={()=>{
                dispatch({
                    type: 'delete',
                    information: { id }
                });
            }}>삭제</button>
        </div>
    )
}

export default Student;