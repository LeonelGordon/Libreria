import NavBar from "./navBar"

export default function layout({children}) {
    const ContainerStyles= {
        width:"90%",
        margin:"100px auto"
    };
    return <div >
        <NavBar/> 
        <div style={ ContainerStyles}>{children}</div>
    </div>
    
};
