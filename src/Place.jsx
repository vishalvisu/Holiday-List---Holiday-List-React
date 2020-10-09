import React from 'react';


export default function Place(props)
{
    return(
    <>
   <li>{props.city}({props.country})
   </li>
   </>
    )
};