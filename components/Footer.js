import React from "react";
import { BsStack } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="container-none flex flex-col items-center">
      <div className="container-none flex flex-row gap-20 py-20 px-20 items-center">
        <div className="basis-1/4">
          <BsStack size={60} />
        </div>
        <div className="basis-2/4">
          <h1>Disclaimer</h1>
          <p>
            {" "}
            Quis aute iure reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.{" "}
          </p>
        </div>
        <div className="basis-1/4 pb-3">
          <p>Lorem</p>
          <p>Ipsum</p>
          <p>Dolor</p>
        </div>
      </div>
      <div className="pb-10">
        <p>&copy; Copyright 2023 - All rights reserved</p>
      </div>
    </div>
  );
}
