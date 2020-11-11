import React from "react";

export default function Teammate(props) {
  const { details } = props;

  if (!details) {
    return <h3>Working fetching your teammate&apos;s details...</h3>;
  }

  return (
    //   Copying the formatting of the friend container
    <div className="friend container">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
