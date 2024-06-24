import React from "react";

import Header  from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react'

import './App.css'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";


function App (){
  const [items , setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))
);
   

    const [newItems ,setnewItems] = useState('')
    const [search ,setSearch] = useState('')
    const addItem = (item) =>{
        const id =items.length ? items[items.length-1].id+1 : 1;
        const addNewItem = {id ,checked:false ,item}
        const listItems = [...items ,addNewItem]
        setItems(listItems)
        localStorage.setItem('todo_list',JSON.stringify(listItems))

    


    }

    const checkItem = (id) =>{
        const listItems = items.map((item)=> 
        item.id===id ? {...item,checked : !item.checked} : item )
        setItems(listItems)
        localStorage.setItem('todo_list',JSON.stringify(listItems))
       
    }

    const deleteItem =(id) =>{
    const listItems = items.filter((item) => item.id!==id)

        setItems(listItems)
        localStorage.setItem('todo_list',JSON.stringify(listItems))
        
        }



    const submitItem = (e) =>{
        e.preventDefault()
        if(!newItems) return ;
        console.log(newItems)
        addItem(newItems)
        setnewItems('')
}
   return (
    <div className="App"> 
    <Header title =" To Do List"/>
    
    <SearchItem
        search={search}
        setSearch={setSearch}
    />
    <AddItem
        newItems={newItems}
        setnewItems = {setnewItems}
        submitItem ={submitItem}
        
     />

    <Content
        items = {items.filter (item =>(((item.item).toLowerCase()).includes(search.toLowerCase()))) }
        setItems ={setItems}
        checkItem={checkItem}
        deleteItem={deleteItem}
    />
      
    <Footer
        length = {items.length}
    />    </div>
      
  
  )

}

 

export default App
