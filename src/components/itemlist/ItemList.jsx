import React from 'react'
import Item from '../item/Item'

//componente itemlist que realiza el mapeo de los productos

const ItemList = ({ items }) => {
  return (
    <div className='p-5 grid grid-cols-4 gap-10 items-start'>
      {items?.map((item) => <Item key={item.id} id={item.id} title={item.title} price={item.price} category={item.category} description={item.description} image={item.image} />)}
    </div>
  )
}

export default ItemList