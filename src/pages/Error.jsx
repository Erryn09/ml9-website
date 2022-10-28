import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, [navigate]);
  return (
    <div className=" text-center text-xl font-bold ">
      You're in the wrong place buddy!!
    </div>
  );
}
