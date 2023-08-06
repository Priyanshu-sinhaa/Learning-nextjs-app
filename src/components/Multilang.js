'use client'
import { headers } from 'next/dist/client/components/headers'
import React from 'react'

function Multilang({language}) {
    const header = language.header;
    const statement = language.statement;
  return (
    <div>
      <h1 className=' text-xl m-14 bg-purple-500 '>{header}</h1>
      <h2>{statement}</h2>

    </div>
  )
}

export default Multilang
