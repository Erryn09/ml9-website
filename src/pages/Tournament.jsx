import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Tournament() {
  const { id } = useParams();
  return (
    <div className="text-lg font-bold">
      <Link to="/tournaments"> Back </Link> <br />
      Gauntlet {id}
    </div>
  );
}
