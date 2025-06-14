import React, { use, useState } from 'react'

export default function Header({turn}) {

  return (
    <div id='text-header'>Turn : {turn}</div>
  )
}
