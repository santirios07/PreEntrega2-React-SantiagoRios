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
        .then(res => {
            setProducts(res)
        })
        .catch(error => console.error(error))
        .finally(() => setLoading(false))
    }
    else{
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
            .catch(error => console.error(error))   
            .finally(() => setLoading(false))
    }
  }


  useEffect(()=> {
      getProducts(idCategory)
  },[idCategory])

  if(loading){
    return(
        <div className='bg-teal-700 h-screen flex justify-center'>
            <CircularProgress size="md" aria-label="Loading..."/>
        </div>
    )
  }



  return (
    <div className='bg-teal-700 h-full'>
        <h1 className='text-6xl text-center py-10 text-white font-ubuntu'>Productos</h1>
        <div className='container mx-auto p-10'>
            <ItemList items={products} />
        </div>
    </div>
  )
}

export default ItemListContainer