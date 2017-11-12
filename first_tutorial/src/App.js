import React, { Component } from 'react';


class App extends Component{
    submit(){
        console.log("submit", this.testinput.value);
    }

    render (){
        return (
            <div>
                <input type="text" placeholder="test" ref={(input) => this.testinput = input}/>
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        );
    }
}


export default App;