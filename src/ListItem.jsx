import React from 'react'

import OrderList from './OrderList';

const ListItem = ({items,checkItem,deleteItem}) => {
  return (
    <ul>
            {items.map ((item) => (

               <OrderList
                    item = {item}
                    key={item.id}
                    checkItem={checkItem}
                    deleteItem={deleteItem}
               />
            ))

            }
        </ul>)
  
}

export default ListItem
