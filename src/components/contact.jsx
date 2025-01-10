import commonBg from '../assets/svg/common-bg.svg';

function Contact() {

    return (
        <section
            className="h-[1000px] bg-cover bg-center mt-24"
            id='contact'
            style={{
                backgroundImage: `linear-gradient(to right, rgba(0,98,185,0.8), rgba(0,98,185,0.8)),url(${commonBg})`,
            }}
        ><div className="flex flex-col items-center pt-8">
                <h1 className="font-extrabold tracking-wider text-5xl text-white mt-4">
                    Contact Me
                </h1>
                <div className="border-[4px] rounded-md border-white w-10 mt-4">
                </div>
                <p className=" w-[90%] lg:w-[900px] text-center text-white tracking-wide mt-4 leading-[1.7] text-xl">
                Have a question or a project in mind? Let’s connect and make it happen!
                </p>
            </div>
            <form className='bg-white w-[90%] p-6 flex flex-col h-[65%] mx-auto mt-8 rounded-lg lg:w-[900px]'>
                <div className='flex flex-col'>
                    <label className='font-bold tracking-wider text-slate-600'>Name</label>
                    <input placeholder='Enter Your Name' className='bg-slate-200 py-4 px-4 w-full  mt-4 font-bold rounded-sm border-2 border-slate-300' required/>
                </div>
                <div className='flex flex-col mt-8'>
                    <label className='font-bold tracking-wider text-slate-600'>Email</label>
                    <input placeholder='Enter Your Email' className='bg-slate-200 py-4 px-4 w-full  mt-4 font-bold rounded-sm border-2 border-slate-300' required/>
                </div> 
                <div className='flex flex-col mt-8 h-96'>
                    <label className='font-bold tracking-wider text-slate-600'>Message</label>
                    <input placeholder='Enter Your Message' className='bg-slate-200 py-4 px-4 h-[80%] w-full  mt-4 font-bold rounded-sm border-2 border-slate-300' required/>
                </div>
                <button className='bg-blue-600 text-white w-48 py-4 font-extrabold rounded-[5px] mt-8 shadow-xl tracking-widest' type='submit'>
                        Contact
                </button>
            </form>

        </section>

    )
}

export default Contact