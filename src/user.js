import React, { useState, useEffect } from "react";

export default function User(props) {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

    // Function to toggle the visibility of details and update button text
    const toggleDetails = () => {
        setIsToggled(!isToggled);
      };

  // Extract the relevant properties from the data object
  const { gender, location, email, dob, phone } = props.data;
  const { large } = props.data.picture;
  const { first, last } = props.data.name;
  const dobDate = new Date(dob.date).toLocaleDateString("en-US");
  const countryText = location.country === "United States" ? "" : `, ${location.country}`;

  return (
    <li>
      <img src={large} alt={`${first} ${last}`} />
      <h4>{`${first} ${last}`}</h4>
      <p>
      Age {dob.age} | {`${location.city}, ${location.state}${countryText}`}
      </p>
      {/* <button onClick={() => setIsToggled(!isToggled)}>toggle</button> */}
      <button onClick={toggleDetails}>{isToggled ? "Hide Details" : "Show Details"}</button>
      {isToggled && (
        <>
          <p><span className="labelBold">Gender: </span>{gender}</p>
          <p><span className="labelBold">Email: </span>{email}</p>
          <p><span className="labelBold">DOB: </span>{dobDate}</p>
          <p><span className="labelBold">Phone: </span>{phone}</p>
        </>
      )}
    </li>
  );
}
