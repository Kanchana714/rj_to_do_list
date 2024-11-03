import React from "react";
import { FaTrashAlt } from "react-icons/fa";
function Items({items,handlecheck,deletecheck}){

    return( <li className='item' key={items.id}>
        <input type="checkbox"
        onChange={()=>handlecheck(items.id)}
        checked={items.checked}/>
        <label 
        style={(items.checked)?{textDecoration:'line-through'}:null} 
        onDoubleClick={()=>handlecheck(items.id)}>{items.item}</label>
        <FaTrashAlt
        onClick={()=>deletecheck(items.id)}
        role="button"
        tabIndex="0"
       // aria-label={"Delete ${items.item}"}
        />
   </li>
  );
}

export default Items
