import React from 'react';
import './App.css';


const App = (props) => {
    const submit = () => {
        console.log("submit", this.testinput.value);
    }


        return (
            <div>
                Hello, App!
            </div>
        );
}


export default App;