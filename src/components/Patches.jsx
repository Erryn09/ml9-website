import React from "react";

export default function Patches(props) {
  return (
    <div>
      <p className=" text-xl">New Patch</p>
      <p className=" text-lg">Patch ID: {props.patchID}</p>
      <p className=" text-md">Updates: {props.update}</p>
      <p className=" text-md">Heroes: {props.heroes}</p>
      <hr />
    </div>
  );
}
