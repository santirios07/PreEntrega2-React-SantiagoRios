import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ItemList from '../../components/itemlist/ItemList'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  //llamado a la api
  const getProducts = () => {
      fetch("https://fakestoreapi.com/products")
          .then(res => res.json())
          .then(res => {
              setProducts(res)
          })
          .catch(error => console.error(error))
  }


  useEffect(()=> {
      getProducts()
  },[])



  return (
    <div className='bg-teal-700 h-full'>
        <h1 className='text-6xl text-center py-10 text-white font-ubuntu'>{greeting}</h1>
        <div className='container mx-auto p-10'>
            <ItemList items={products} />
        </div>
    </div>
  )
}

export default ItemListContainer