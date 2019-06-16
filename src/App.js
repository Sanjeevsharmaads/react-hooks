import React,{useState} from 'react';
import ResourceList from "./ResourceList"

const  App = () => {
    //useState function hook to use state in functional component
    const [resource,setResource] = useState('posts');

    return (
    <div className="App">
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={()=>  setResource('todos')}>todos</button>
        </div>
        <ResourceList resource={resource} />
    </div>
    );
}

export default App;
