import React from "react";

// function Form(props) {

//     // const handleSubmit = event => {
//     //     if(value)
//     // }
//     return (
//         <form className ="Form">
//             <label>
//                 First Name:
//                 <input type="text" name="firstName" /><br />
//                 Last Name:
//                 <input type="text" name="lastName" />
//             </label>
//             <button onClick={props.getCharacterCall}>Search</button>
//         </form>
//     )
// }

//adding a listener for submit, which is triggering a callback function to search

const Form = (props) => (
    <form onSubmit={props.getCharacterCall}>
        <input type="text" name="firstSearch" />
        <input type="text" name="lastSearch" />
        <button>Search</button>
    </form>
);

export default Form;