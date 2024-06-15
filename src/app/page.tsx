"use client"

import { useState, useEffect } from "react";

interface IMessage {
  status: string,
  message: string
}

export default function Home() {
  const [message, setMessage] = useState<IMessage>({ status: "", message: "" });

  useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://131c-139-59-208-177.ngrok-free.app/test/test", {
          method: "get",
          headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
            "User-Agent": "PostmanRuntime/7.39.0"
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
        // console.log(json);
        // setMessage(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);


  return (
    <p>
    </p>
  );
}
