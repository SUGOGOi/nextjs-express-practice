"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [message, setMessage] = useState("loading");

  useEffect(() => {
    fetch("http://localhost:4000/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  });

  return <div>{message}</div>;
};

export default page;
