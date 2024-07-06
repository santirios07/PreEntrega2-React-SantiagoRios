import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../../components/itemlist/ItemList'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@nextui-org/react'
import { collection, getDocs, limit, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  const {idCategory} = useParams()

  //Llamado a firebase
  const getProducts = (idCategory) => {
    setLoading(true)

    if(idCategory){
        const q = query(
          collection(db, "products"),
          where("category", "==", idCategory)
        );
        getDocs(q).then((snapshot) => {
          if(snapshot.size === 0){
            console.log("No results");
          }
          setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        .finally(() => setLoading(false))
    }
    else{
        const q = query(
          collection(db, "products"),
          limit(5)
        );
        getDocs(q).then((snapshot) => {
          if(snapshot.size === 0){
            console.log("No results");
          }
          setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
        })
        .finally(() => setLoading(false))
    }
  }


  useEffect(()=> {
      getProducts(idCategory)
  },[idCategory])

  if(loading){
    return(
        <div className='bg-white h-screen flex justify-center'>
            <CircularProgress size="md" label="Cargando..."/>
        </div>
    )
  }



  return (
    <div className='bg-white h-full'>
        <h1 className='text-6xl text-center py-10 text-teal-600 font-ubuntu'>Productos</h1>
        {products.length > 0 ?
        <div className='container mx-auto px-10'>
            <ItemList items={products} />
        </div> 
        :
        <h2>No se encontaron productos</h2>
        }
    </div>
  )
}

export default ItemListContainer