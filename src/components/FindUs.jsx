import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn join-item justify-start">
            <BsInstagram/> Instagram
        </button>
        <button className="btn join-item justify-start">
            <FaTwitter/> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
