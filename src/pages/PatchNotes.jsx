import React from "react";
import Patches from "../components/Patches";
import patchData from "../data/patchData";

export default function PatchNotes() {
  const patchElements = patchData.map((patch) => {
    return (
      <Patches
        patchID={patch.patchID}
        update={patch.update}
        heroes={patch.heroes}
      />
    );
  });

  return <div>{patchElements}</div>;
}
