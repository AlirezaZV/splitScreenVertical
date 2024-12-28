import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const PageSecond = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fade-in animation with black background
    gsap.fromTo(
      ".first-page",
      { scale:0},
      { scale: 1, duration: 0.1, ease: "power1.out" }
    );
  }, []);

  return (
    <div className="first-page" style={{ height: "100vh"}}>
      <h1>Welcome to Page 2</h1>
            <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageSecond;
