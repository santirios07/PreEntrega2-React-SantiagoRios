import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../../components/itemlist/ItemList'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@nextui-org/react'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  const {idCategory} = useParams()

  //Llamado a la api
  const getProducts = (idCategory) => {
    setLoading(true)

    if(idCategory){
        fetch(`https://fakestoreapi.com/products/category/${idCategory}`)
        .then(res => res.json())
        .then(res => setProducts(res))
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }
    else{
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(error => console.error(error))   
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