import React from 'react'

export default function Form(props){
    const {values, update, submit}= props
}


 // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
    // a) pull the name of the input from the event object
    // b) pull the value of the input from the event object

    // c) use the `update` callback coming in through props
const onChange = (evt) => {
    // part a and b 
    const {name, value} = evt.target; 
    // part c
    update(name,value);
};
 // 🔥 STEP 7 - IMPLEMENT the submit handler
    // a) don't allow the browser to reload!
    // / b) use the `submit` callback coming in through props
    const onSubmit = (evt) => {
        // step a
        evt.preventDefault();
        // step b
        submit();
    };

return(
<form className="form container" onSubmit={onSubmit}>
<div className="form-group inputs">

{/* // STEP 3 - Make an input of type `text` for username.
//               Controlled inputs need `value` and `onChange` props.
//               Inputs render what they're told - their current value comes from app state.
//               At each keystroke, a change handler fires to change app state.  */}

<label>Username
<input 
type="text"
name="username"
onChange={onChange}
vaule={values.username.}
placeholder="type a Name"
maxLength="30"
></input>
</label>


{/* STEP 4 - Make an input of type `email` or `text` for email. */}
<label>
    Email
    <input
    type="email"
    name="email"
    onChange={onChange}
    value={value.email}>
        </input>
    </label>
{/* STEP 5 - Make dropdown for role. */}
    <label>
        Role
        <select name="role" value={values.role}
        onchange={onChange}>
            <option value="Tank">Tank/</option>
            <option value="Healer">Healer</option>
            <option value="Damage">Damge</option>
        </select>
    </label>
<div className="submit">
    <button>submit</button>
</div>
</div>
</form>
);
