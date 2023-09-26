import { Link } from "react-router-dom"

export default function Book({item}) {
    const bookContainerStyle= {
        display: "Flex",
        flexDirection:"column",
        width: "300px",
    };
    const bookInfoStyle ={
        display: "Flex",
        flexDirection:"column",
       alignItems: "center",
       textAlign: "center",
       color: "white",
       textDecoration: "none"
    };
    return ( 
    <div style={bookContainerStyle}>
        <Link to= {`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="200px" alt= {item.title}/> 
        <div>{item.title} </div>
        </Link>
    </div>
    );
};
