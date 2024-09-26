import React from "react"

import Items from "./Items";
function Itemslist({items,handlecheck,deletecheck}){
return (<ul>
       {items.map((items)=>(<Items
       items={items}
       key={items.id}
       handlecheck={handlecheck}
       deletecheck={deletecheck}/>
       ))}
 </ul>);}

 export default Itemslist;