import React from 'react'
//import { memo } from 'react';

//memo se renderiza solo cuando sus props cambian
export const Small = React.memo(({ value }) => {

    console.log('Me volvi a generar');

  return (
    <small>{ value }</small>
  )
})
