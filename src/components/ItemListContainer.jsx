import { useEffect, useState } from "react";
import {pedirDatos} from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase/config"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    // useEffect(() => { Para hacerlo con el JSON
    //     pedirDatos()
    //         .then((res)=>{
    //             if(categoria){
    //                 setProductos(res.filter((prod)=>prod.categoria === categoria));
    //                 setTitulo(categoria);
    //             } else{
    //                 setProductos(res);
    //                 setTitulo("Productos");
    //             }

    //         })
    // }, [categoria])

    useEffect(() => {
      
        const productosRef = collection(db, "productos");

        const q= categoria ? query(productosRef, where("categoria", "==",categoria)) : productosRef;


        getDocs(q)
            .then((resp) => {

            

                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data() , id: doc.id}

                        })
                )
            })
    }, [categoria])
    
    
    return (
        <div>
            <ItemList productos={productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer

