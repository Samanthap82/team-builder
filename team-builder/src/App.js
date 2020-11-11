import "./App.css";
import React, { useState } from "react";
import Form from "./Form";
import Teammate from "./Teammate";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};
// Step 1 We need to State to hold all values of the form
// fix this using the state hook

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
  //  It takes in the name of an input and its value, and updates `formValues`
  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeammate = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!newTeammate.name || !newTeammate.email || !newTeammate.role) {
      return;
    }

    setTeam([...team, newTeammate]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="Container">
      <h1>Create Your Team</h1>
      {/* STEP 2 - The form component needs its props. */}
      {/* //  Check implementation of Form
        //  to see what props it expects. */}
      <Form values={formValues} update={updateForm} submit={submitForm} />
      {team.map((teammate) => {
        return <Teammate key={teammate.id} details={teammate} />;
      })}
    </div>
  );
}

export default App;
