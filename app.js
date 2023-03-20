
import React from 'react';
import ReactDOM from 'react-dom/client';


// React.createElement => Object => HTML(DOM)

const heading = (
    <h3>Namste React!</h3>
); //React Element

const Title = () => (
    <h3>Namste React Title!</h3>
); //React Element

var xyz = 10;

const HeaderComponent = () => {
    return (
        <div> 
            {xyz}
            <h1>Namaste React functional component</h1>
            <h2>This is a h2 tag</h2>
            {heading}
            <Title/>
            {Title()}
        </div>
    )
}// React Component


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)