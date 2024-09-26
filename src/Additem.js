import React, { useRef } from 'react'
import {FaPlus}from 'react-icons/fa'

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  
  const inputRef=useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
          autoFocus
          ref={inputRef}
          id='addItem'
          type="text"
          placeholder="Add item"
          required
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
          
          ></input>
          <button
            type='submit'
            aria-label='Add item'
            onClick={()=>inputRef.current.focus()}
          >
              <FaPlus /> 
            </button>
    </form>
  )
}

export default Additem