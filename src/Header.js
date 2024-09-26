import React from 'react';
import './index.css'
function Header(props)
{
    return (<div className='H'>
        <h2 style={{backgroundColor:"blue",}}>{props.title} </h2>
        </div>);
}
<Header defaultPropsTitle="to do list"/>
export default Header;