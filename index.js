// import React from "react";
// import ReactDOM from "react-dom"
const page = (
    <div>
        <h1>This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
);

const navBar = (
    <nav style={{
        display: "flex",
        color: "white",
        backgroundColor: "DodgerBlue",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap"
    }}>
        <i className="fa-solid fa-flag" style={{fontSize:"3rem",
        "color": "#00008B"}}></i>
        <i class="fa-solid fa-envelope"></i>
        <h1>Website</h1>
        <button className="">Nav Button1</button>
        <button>Nav Button2</button>
        <button>Nav Button3</button>
    </nav>
)
console.log(document.getElementById("root").append(JSON.stringify(navBar)));

ReactDOM.render(navBar,document.getElementById("root"));