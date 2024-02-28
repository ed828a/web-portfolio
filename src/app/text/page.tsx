import React from "react";

type Props = {};

const TextGradient = (props: Props) => {
  return (
    <div className="grid place-items-center min-h-screen bg-gradient-to-t from-red-500 to-green-500 ">
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Text Gradient
      </h1>
      <h1 className="bg-clip-text bg-[linear-gradient(90deg,_#FFFFFF,_rgba(255,_0,_0,_0.5))]">
        Text Gradient
      </h1>
    </div>
  );
};

export default TextGradient;
