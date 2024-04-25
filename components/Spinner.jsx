"use client";

import { ScaleLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="w-full h-40 flex items-center justify-center">
      <ScaleLoader color="green" />
    </div>
  );
}
