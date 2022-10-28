import React from "react";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col mx-40 align-center justify-center">
        <Feed />
      </div>
    </div>
  );
}
