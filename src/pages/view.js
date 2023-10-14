import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect } from "react";
import { useAppContext } from "../store/store";
import { useState } from "react";

export default function View() {
    const [item, setItems] = useState(null);
    const params= useParams();
    const store= useAppContext();

    useEffect(() => {
        const Book= store.getItem(params.BookId);
        setItems(Book);
        }, [])

    const itemStyles= {
        container: {
            display: "flex",
            gap: "20px",
            color: "white",
            width: "800px",
            margin: "0 auto",
        },
    }

    const containerStyle = {
        marginBottom: "10px"
    }

    if (!item){
        return <Layout> Item not found </Layout>
    }

    return (
    <Layout>
        <div style={itemStyles.container}>
            <div>
                <div>{item?.cover ? <img src={item?.cover} width="400px"/> : "" }</div>
            </div>
        <div >
            <h2 style={containerStyle}>{item?.title}</h2>
            <div style={containerStyle} > {item?.author} </div>
            <div style={containerStyle}> {item?.intro}</div>
            <div style={containerStyle}> {item?.completed ? "Leido": "Por terminar"}</div>
            <div> {item?.review}</div>
        </div>
        </div>
    </Layout>
    );
}