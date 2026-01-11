import React from 'react'
import Header from './components/Header'
import fondo from './src/fondo.jpg'
import ListPeliculas from './components/ListPeliculas'
function PelisDevPage() {
  return (
    <div className='w-full mx-auto px-2 items-center'>
      <Header />
      <div className='mx-[10%]'>
      <ListPeliculas />

      </div>
      <div className='absolute left-0 top-0 w-full -z-10 overflow-hidden mask-[linear-gradient(black_10%,transparent)]'>
        <img src={fondo} alt="" />
      </div>
    </div>
  )
}

export default PelisDevPage