import React, { useState, useEffect } from 'react'
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc} from "firebase/firestore"
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

    const id = useParams().id;

    const[item,setItem] = useState(null);


    // useEffect(() => { con el JSON
    //     pedirItemPorId(Number(id))
    //         .then((res) =>{
    //             setItem(res);
    //         })

    // }, [id])

    useEffect(() => {
      const docRef=doc(db, "productos", id);
      getDoc(docRef)
        .then((resp)=>{
          setItem(
            {...resp.data(),id:resp.id}
          );
        })
    }, [])
    
    
  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer
