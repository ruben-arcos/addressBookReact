import React, { useState, useEffect } from "react";

export default function User(props) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

  // Extract the relevant properties from the data object
  const { gender, location, email, dob, phone } = props.data;
  const { large } = props.data.picture;
  const { first, last } = props.data.name;
  const dobDate = new Date(dob.date).toLocaleDateString("en-US");
  const countryText = location.country === "United States" ? "" : `, ${location.country}`;

  return (
    <li>
      <img src={large} alt={`${first} ${last}`} />
      <h4>Name: {`${first} ${last}`}</h4>
      <p>
      Age {dob.age} | {`${location.city}, ${location.state}${countryText}`}
      </p>
      <button onClick={() => setIsToggled(!isToggled)}>toggle</button>
      {isToggled && (
        <>
          <p>Gender: {gender}</p>
          <p>Email: {email}</p>
          <p>DOB: {dobDate}</p>
          <p>Phone: {phone}</p>
        </>
      )}
    </li>
  );
}
