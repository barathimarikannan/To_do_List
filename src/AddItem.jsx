import React from 'react'
import{FaPlus} from "react-icons/fa"

const AddItem = ( {newItems,setnewItems,submitItem}) => {
  return (
    <form className='addForm' onSubmit={submitItem}>
        <label
         htmlFor='addItem' >Add</label>
        <input  
            type="text"
            id ="item"
            placeholder ="ADD ITEM" 
            required

            autoFocus
            value={newItems}
            onChange={(e)=>setnewItems(e.target.value)}
           
        />
        <button type ="submit" 
                  aria-label='Add Item'>
            <FaPlus/>
        </button>
        
           
           
        

    </form>
  )
}

export default AddItem