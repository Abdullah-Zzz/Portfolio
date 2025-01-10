import commonBg from '../assets/svg/common-bg.svg';
import githubIcon from '../assets/png/github-ico.png'
import linkedinIcon from '../assets/png/linkedin-ico.png'
import twitterIcon from "../assets/png/twitter-ico.png"
import lcodeIcon from "/leetcode-white.svg"


function Hero() {

  return (
    <section
  className="h-[85vh] bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0,98,185,0.8), rgba(0,98,185,0.8)),url(${commonBg})`,
  }}
>
<div className='hidden xl:inline w-16 absolute top-[40%]'>
  <div className='border-2 border-white p-2 h-[70px] flex items-center justify-center' >
  <a href='https://github.com/Abdullah-Zzz' target='_blank' className='cursor-pointer'><img src={githubIcon} className="w-16" /></a>
  </div>
  <div className='border-2 border-white p-2 h-[70px] flex items-center justify-center' >
    <a href='https://leetcode.com/u/AbdullahZzz/' className='cursor-pointer'><img src={lcodeIcon } className="w-16"/></a>
  </div>
  <div className='border-2 border-white p-2 h-[70px] flex items-center justify-center' >
  <a href='#' className='cursor-pointer'><img src={linkedinIcon} className="w-16"/></a>
  </div>
  <div className='border-2 border-white p-2 h-[70px] flex items-center justify-center' >
  <a href='#' className='cursor-pointer'><img src={twitterIcon} className="w-16"/></a>
  </div>
</div>
<div className='flex  h-full w-full justify-between items-center md:justify-center '>
    <div className='text-white p-2 text-md  flex flex-col items-center md:w-[800px]  lg:w-[1000px]'>
      <h1 className='text-white text-4xl font-extrabold text-center leading-[1.5] tracking-wider md:text-[50px] lg:text-[70px] '>
      👋 Hello, I'm Abdullah Sarwar!</h1>
      <p className='text-center mt-6 text-sm md:text-lg'>
      A passionate Full-Stack Developer specializing in crafting seamless and interactive web experiences. With expertise in the MERN stack and a flair for solving real-world problems through technology.
      </p>
      <a href='#portfolio'>
        <button className='bg-white text-black w-48 py-3 font-bold rounded-[5px] mt-8 shadow-xl tracking-widest'>
        PROJECTS
      </button>
      </a>
    </div>
  </div>
  
</section>

  )
}

export default Hero