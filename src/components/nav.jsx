import React from 'react';
import Hamburger from 'hamburger-react';

function Nav() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <nav className='flex flex-col border-b-2 justify-between md:items-center p-4 sticky top-0 bg-white z-10 h-auto shadow-lg '>
      <div className='flex  w-full justify-between items-center '>
      <div className="flex">
        <h1 className='font-bold text-4xl text-slate-600 cursor-pointer'>Abdullah S.</h1>

      </div>
      <div
        className=
             'flex items-center '
      >
        <div
          onClick={() => setShowNav(prev => !prev)}
          className="md:hidden "
        >
          <Hamburger />
        </div>
        <div className="hidden md:flex ">
          <ul 
            className=
              'hidden md:flex flex-row'
            >
            <a className=" text-2xl text-black  hover:text-black p-6 font-bold mr-4 lg:mr-12 cursor-pointer" href='/'>
              Home
            </a>
            <a className="text-2xl text-black hover:text-black p-6 font-bold mr-4 lg:mr-12" href='#about'>
              About Me
            </a>
            <a className="text-2xl text-black hover:text-black p-6 font-bold mr-4 lg:mr-12" href='#portfolio'>
              Portfolio
            </a>
            <a className="text-2xl text-black hover:text-black p-6 font-bold mr-4 lg:mr-12" href='#contact'>
              Contact Me
            </a>
          </ul>
        </div>

      </div>
      </div>
      <div className="flex md:hidden">
        <ul
          className={
            showNav
              ? 'flex flex-col  mt-4 mb-4'
              : 'hidden'
          }
        >
          <a className=" text-2xl text-black  hover:text-black   font-bold   cursor-pointer" href='/'>
              Home
            </a>
            <a className="text-2xl text-black hover:text-black  mt-4 font-bold " href='#about'>
              About Me
            </a>
            <a className="text-2xl text-black hover:text-black   mt-4 font-bold  " href='#portfolio'>
              Portfolio
            </a>
            <a className="text-2xl text-black hover:text-black    mt-4 font-bold " href='#contact'>
              Contact Me
            </a>
        </ul>
      </div>
    </nav>

  );
}

export default Nav;
