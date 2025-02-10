import { useState } from "react";

function FullName() {
  // State hooks to store the first and last names
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Handle for form submission
  const handlSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert("Please enter both first and last names.");
    }
  };

  return (
    <div className="name">
      <h1>Full Name Display</h1>

      {/* form that requires both first name and last name */}
      <form onSubmit={handlSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          id="lastNmae"
          name="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Display full name if available */}
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default FullName;
