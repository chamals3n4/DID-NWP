import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="relative mx-auto max-w-screen-xl px-4 mt-[30px] pb-10 sm:px-6 lg:px-8 ">
          <p className="mt-8 text-center text-md text-gray-500 lg:text-right">
            Built by{" "}
            <Link to={"https://www.linkedin.com/in/chamalsena"} target="_blank">
              Chamal Senarathna{" "}
            </Link>
            <br />
            Feel free to contribute to this project and help make it better -
            <Link
              to={"https://www.github.com/chamals3n4/did-nwp"}
              target="_blank"
            >
              {" "}
              Github Repo
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
