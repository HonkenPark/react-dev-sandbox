import React, { useState, useReducer } from 'react';
import Student from './Students';

const reducer = (state, action)=>{
  switch(action.type) {
    default:
      return state;
    case 'add':
      const name = action.student.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case 'delete':
      return{
        count: state.count - 1,
        students: state.students.filter((student) => student.id !== action.information.id),
      };
    case 'mark':
      return{
        count: state.count,
        students: state.students.map(student => {
          if (student.id === action.information.id) {
            
          }
        })
      }
  }
};

const initialState = {
  count: 0,
  students: [],
};

function App() {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>아이패드에서 VSCode로 ReactJS 코딩하고 실행하기</h2>
      <p>총 학생수: {studentsInfo.count}</p>
      <input
       type="text"
       placeholder='이름을 입력해주세요'
       value={name}
       onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={()=>{
        dispatch({
          type: 'add',
          student: {name},
        });
      }}>추가</button>
      {studentsInfo.students.map(student => {
        return (<Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} />);
      })}
    </div>
  );
}

export default App;
