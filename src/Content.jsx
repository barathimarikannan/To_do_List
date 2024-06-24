import React from 'react'


import ListItem from './ListItem';

const content = ( {items,checkItem,deleteItem}) => {
    
  return (
    <main>
        {(items.length) ? ( 
            <ListItem
                items = {items}
                
                checkItem={checkItem}
                deleteItem={deleteItem}
            /> 
          )  : 
        (
        <p>
            Your list is empty. MAKE SOME LIST!!!
        </p> 
            
          )}
       
    </main>
        

  )
}


export default content