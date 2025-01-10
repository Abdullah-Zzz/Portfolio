import githubIcon from '../assets/png/github-ico.png'
import instaIcon from '../assets/png/insta-ico.png'
import linkedinIcon from '../assets/png/linkedin-ico.png'
import twitterIcon from "../assets/png/twitter-ico.png"
import lcodeIcon from "/leetcode-white.svg"


export default function Footer(){
    return (
        <footer className="bg-black h-96 w-full text-white px-8 py-12 flex flex-col justify-between ">
            <div className='flex lg:justify-between w-full lg:w-[60%] items-start lg:items-center mx-auto flex-col lg:flex-row '>
            <div className=' pr-12'>
                <h1 className='tracking-wider text-xl font-extrabold mt-0 lg:mt-0'>
                    Abdullah S.
                </h1>
                <p className='text-md mt-4'>
                Connecting creativity with technology, one line of code at a time.
                </p>
            </div>
            <div className='mt-8'>
                <h1 className="tracking-wider text-xl font-extrabold">
                    SOCIAL
                </h1>
                <div className='flex mt-4'>
                    <div>
                        <a href='https://github.com/Abdullah-Zzz' target='_blank'><img src={githubIcon} alt="" className='w-6 mr-2 lg:mr-4'/></a>
                    </div>
                    <div>
                    <a href='https://leetcode.com/u/AbdullahZzz/' target='_blank'><img src={lcodeIcon} alt=""  className='w-6 mr-2 lg:mr-4'/></a>
                    </div>
                    <div>
                    <a href='#' ><img src={linkedinIcon} alt=""  className='w-6 mr-2 lg:mr-4'/></a>
                    </div>
                    <div>
                    <a href='#' ><img src={twitterIcon} alt=""  className='w-6 mr-2 lg:mr-4'/></a>
                    </div>
                </div>
            </div>
            </div>
            

            <div className='w-full border-t-2 border-white mt-10 flex items-center p-4 justify-center text-sm lg:w-[60%] mx-auto '>
                 © Copyright 2025. Made by <span className='font-bold underline ml-2'> Abdullah S.</span>
            </div>
        </footer>
    )

}