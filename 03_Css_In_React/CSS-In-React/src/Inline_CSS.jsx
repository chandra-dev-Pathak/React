import { useState } from "react";

function Inline_CSS() {

    const [hover, setHover] = useState(false);

    return (
        <div style={{
            width: "fit-content",
            backgroundColor: "gray",
            boxShadow: "1px 1px 3px 2px #343434",
            padding: "50px",
            borderRadius: "20px"
        }}>
            <button
                style={{
                    backgroundColor: hover ? "#ffffff" : "pink",
                    border: hover ? "1px solid #ff4867" : "1px solid white",
                    borderRadius: "10px",
                    color: hover ? "pink" : "white",
                    letterSpacing: "1px",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    boxShadow: "1px 2px 2px #ff526f",
                    cursor: "pointer",
                    transition: "0.3s"
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                save me
            </button>
        </div >
    );

}

export default Inline_CSS


