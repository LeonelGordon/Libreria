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

    if (!item){
        return <Layout> Item not found </Layout>
    }

    return<Layout>
        <h2>{item?.title}</h2>
        <div>{item?.cover ? <img src={item?.cover} width="400px"/> : "" }</div>
        <div> {item?.author}</div>
        <div> {item?.intro}</div>
        <div> {item?.completed ? "Leido" : "Por terminar"}</div>
        <div> {item?.review}</div>
        </Layout>;
    }