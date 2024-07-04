import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/itemdetail/ItemDetail'
import { CircularProgress } from '@nextui-org/react'
import { db } from '../../firebase/client'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const {idProduct} = useParams()

    useEffect(() => {
        const productRef = doc(db, "products", idProduct);
        getDoc(productRef).then((snapshot) => {
          if (snapshot.exists()) {
            setProduct({id: snapshot.id, ...snapshot.data()})
          }
        })
    },[idProduct])


  return (
    <>
        {product ? <ItemDetail detail={product} /> : <div className='flex justify-center '><CircularProgress size="md" aria-label="Loading..."/></div>}
    </>
  )
}

export default ItemDetailContainer