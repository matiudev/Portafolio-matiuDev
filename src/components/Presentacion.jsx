import React from 'react'
import { AtSign, Copy, Github, MessageCircleMore, Send, Terminal } from 'lucide-react';

const links = [
  {
    nombre: "GitHub",
    link: "https://github.com/matiudev",
    icon: Github
  },
  {
    nombre: "WhatsApp",
    link: "https://wa.me/56941128390?text=Hola,%20me%20interesa%20tu%20servicio%20como%20desarrollador%20web",
    icon: MessageCircleMore
  }
]

function Presentacion() {
  return (
    <>
      <div className=''>
        <div className='flex items-center justify-start gap-5 mt-20 mb-8'>
          <Terminal size={40} />
          <h2 className='font-black text-5xl font-poetsen'>Matias Garcia</h2>
        </div>
        <p className="text-start font-medium">
          No soy un Robot, <span className="text-blue-300">soy un desarrollador Web</span>
        </p>
        <p className='text-start font-medium'>apasionado por el mundo del <span className='text-pink-300'>desarrollo y la programación.
        </span></p>
      </div>

      {/* Correo */}
      <div className='flex mt-6'>
        <div className='w-3/4 bg-[#0c1224] mx-3 rounded-2xl border-2 border-[#272e40] hover:border-[#ffffff]'>
          <p className='ml-4 py-2 font-semibold'>matiiasalberto.22@gmail.com</p>
        </div>
        <div className='flex items-center gap-2 w-1/4'>
          <div className='bg-[#c3d7e2] rounded-2xl p-3 hover:bg-[#a7bccb] hover:cursor-pointer'>
            <Send color='black' size={18} />
          </div>
          <div className='bg-[#c3d7e2] rounded-2xl p-3 hover:bg-[#a7bccb] hover:cursor-pointer'>
            <Copy color='black' size={18} />
          </div>
        </div>
      </div>

      {/* Social */}
      <div className='mt-20'>
        <div className='flex items-center justify-start gap-5 mt-20 mb-10'>
          <AtSign size={40} />
          <h2 className='font-black text-4xl font-poetsen'>Social</h2>
        </div>

        <div className='flex gap-4'>
          {links.map((item) => (
            <a 
            key={item.nombre}
              className='flex gap-3 bg-[#0c1224] px-5 py-6 rounded-2xl border-2 border-[#5c5d74] hover:border-[#ffffff] hover:cursor-pointer'
              href={item.link}
               target="_blank"
              >
              <item.icon />
              <p className='font-semibold'>{item.nombre}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Presentacion;