"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className="bg-red-500 text-center">
          <h1>Please note that this application uses a free Cloudinary subscription.</h1>
          <h2>
            Any errors that occur during actions are due to limitations. The main purpose of this
            application is for my portfolio.
          </h2>
        </div>
      )}
    </>
  );
}
