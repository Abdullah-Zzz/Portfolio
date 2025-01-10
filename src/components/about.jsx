

export default function About() {
    const skills = ["HTML","CSS","JS","React","Redux","TailwindCSS","MaterialUI","Node.js","Express","MongoDB","GIT"]
    return (

        <section className="pt-16 bg-slate-100 " id="about">
            <div className="flex flex-col items-center">
                <h1 className="font-extrabold tracking-wider text-5xl">
                    About Me
                </h1>
                <div className="border-[4px] rounded-md border-blue-600 w-10 mt-4">
                </div>
            </div>
            <div className="flex flex-col lg:flex-row p-4 w-full justify-center mt-16">
                <div className=" w-full lg:w-[35%] mb-12 ">
                    <h2 className="text-3xl font-bold  tracking-wide">
                        Get To Know Me!
                    </h2>
                    <p className="text-slate-500 tracking-wide mt-6  leading-[1.7] text-xl">
                    Hi, I'm Abdullah Sarwar, a passionate Full-Stack Developer specializing in the MERN stack. I enjoy building dynamic, user-friendly web applications and solving real-world problems through code. I thrive on continuous learning and collaboration to bring ideas to life.  
                    <br></br>I enjoy exploring new technologies, honing my skills in cybersecurity.
                                     </p>
                    <a href="#contact"><button className='bg-blue-600 text-white w-48 py-4 font-extrabold rounded-[5px] mt-8 shadow-xl tracking-widest' >
                        Contact
                    </button></a>
                </div>
                <div className="w-full lg:w-[35%] p-4 lg:p-0 lg:ml-12 ">
                <h2 className="text-3xl font-bold tracking-wide">
                        My Skills
                    </h2>
                    <div className="flex flex-wrap">
                        {
                        skills.map((skill) =>{
                            return (
                                <div className="bg-slate-300 py-2 px-4 rounded-sm mt-8 flex items-center justify-center font-bold tracking-wider text-slate-500 mr-4">
                                {skill}
                                 </div>  
                            )
                        })
                      
                    }       
                    </div>
                </div>
            </div>

        </section>

    )
}