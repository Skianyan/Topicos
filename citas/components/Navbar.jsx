import Link from 'next/link'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';



const Navbar = () => {
  return (
        <nav className='bg-slate-400 w-min-[400px] w-[20%] p-10 '>
            <ul className='text-white space-y-5'>
                <li className='space-x-2 flex'>
                  <div><HomeIcon/></div>
                  <div><Link href={'/'}>Inicio</Link></div>
                </li>
                <li>
                  <Link href={'/citas'}>Agendar cita</Link>
                </li>
                <li className='space-x-2 flex'>
                  <div><InfoIcon/></div>
                  <div><Link href={'/acercade'}>Acerca de</Link></div>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar