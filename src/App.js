import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';

const App =() => {
    return (
        <div>
            <div className="main-header" style={{textAlign:"center"}}>
                <Header/>
            </div>
            <div>
                <Todo/>
            </div>
        </div>
    )
}

export default App;