import React from 'react';
import Itemslist from './Itemslist';

function Content({items,handlecheck,deletecheck})
{
    
    return (
    <>
        
        {(items.length)?(<Itemslist
        items={items}
        handlecheck={handlecheck}
        deletecheck={deletecheck}/>
        )
       :(<p style={{marginTop:'10em'}}>your list is empty</p>)}
        
    </>
    );
}

export default Content;