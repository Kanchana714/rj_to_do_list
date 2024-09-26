import React from 'react';

function Footer({length})
{
    return <div style={{backgroundColor:"blue",color:"white",marginTop:"20em"}}>
                 {length}  list {length===1?"item":"items"} 
    </div>;
}

export default Footer;
