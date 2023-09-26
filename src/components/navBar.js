import { Link } from "react-router-dom";

export default function navBar() {
    const linkStyle= {
        paddinf: "1opx",
        display: "block",
        fontSice: "18px",
        textDecoration: "none",
        color: "white",
        margin: "0 20px 0 20px"
    }

    const navContainerStyles= {
        backgroundColor:"#181d27",
        padding: "10px",
        display:"flex",
        gap: "5px",
        justifyContent: "center",
    };
    return (
    <div style={navContainerStyles}> 
        <Link to= '/' style={linkStyle} >Home</Link>
        <Link to= '/create' style={linkStyle} >Create</Link>
    </div>
    );
};
