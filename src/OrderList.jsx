import React from 'react'
import { FaTrash } from "react-icons/fa6";


const OrderList = ({item,checkItem,deleteItem}) => {
  return (
    <li className='item' key={item.id}>
        <input type='checkbox'
            onChange={() => checkItem(item.id)}
           checked={item.checked}
        />
        <label style={(item.checked) ?{textDecoration:"line-through"}: null}
             onClick={() => checkItem(item.id)}
           checked={item.checked}>
            {item.item}
        </label>
        <FaTrash roll="button"
            tabIndex="0"
            onClick={()=> deleteItem(item.id)}
        />
    </li>
  )
}

export default OrderList