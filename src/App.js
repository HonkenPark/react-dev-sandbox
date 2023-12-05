import { useCallback, useState } from 'react';
import Child from './Child';

function App() {
  const [parentAge, setPareneAge] = useState(0);

  const increaseParentAge = () =>{
    setPareneAge(parentAge + 1);
  };

  const callMe = useCallback(()=>{
    window.alert('Hey you what\'s up!!');
  }, []);

  window.alert('Rendered Parent Component!!');

  return (
    <div style={{border: '2px solid navy', padding: '10px'}}>
      <h1>Parent</h1>
      <p>age: {parentAge}</p>
      <button onClick={increaseParentAge}>Increase Parent's Age</button>
      <Child name={'My Name'} callMe={callMe} />
    </div>
  );
}

export default App;