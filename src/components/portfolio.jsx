import projectPhoto from "../assets/jpeg/project-mockup-example.jpeg"

export default function Portfolio() {

    const projects = [
        {
            name: "StyleHaven - E-commerce Clothing Store",
            details: 'Style Haven is a modern e-commerce platform designed for a seamless shopping experience. It enables users to browse a curated collection of clothing, place orders, and efficiently track their purchases. Built with a focus on user-friendly design and functionality, the store integrates robust features for both customers and administrators, ensuring a reliable and enjoyable shopping experience.',
            img: '/pr2.png',
            tech: ['React', 'TailwindCSS', 'Redux', 'Node.js', 'Express', 'mongoDB'],
            link: 'https://stylehaven.vercel.app/'
        },

        {
            name: "Full Stack Tourist Web",
            details: 'Created a comprehensive tourist information website featuring user authentication, interactive maps, and detailed tourist spot information. Implemented CRUD operations for managing tourist destinations, leveraging both front-end and back-end development skills.',
            img: '/pr1.png',
            tech: ['React', 'node.js', 'express', "mongodb"],
            link: 'https://touristweb-client.vercel.app/'
        },
        {
            name: "Weather App",
            details: 'Built a weather forecasting application that fetches real-time weather data from the OpenWeather API. Integrated responsive design to ensure usability across various devices and screen sizes.',
            img: '/pr3.png',
            tech: ['React'],
            link: 'https://abdullah-zzz.github.io/WeatherApp/'
        }
    ]

    return (
        <section>
            <div className="flex flex-col items-center pt-8" id="portfolio">
                <h1 className="font-extrabold tracking-wider text-5xl">
                    Portfolio
                </h1>
                <div className="border-[4px] rounded-md border-blue-600 w-10 mt-4">
                </div>
                <p className=" w-[90%] lg:w-[900px] text-center text-slate-500 tracking-wide mt-4 leading-[1.7] text-xl">
                 Building impactful digital experiences with passion and precision.
                </p>
            </div>
            {
                projects.map((pr) => {
                    return (
                        <div className="flex flex-col lg:flex-row p-4 w-full justify-center items-center mt-16 ">
                            <div className="w-full lg:w-[35%] p-4 lg:p-0 lg:ml-12 border-2 border-black cursor-pointer ">
                                <a href={pr.link} target="_blank">
                                    <img src={pr.img} />
                                </a>
                            </div>
                            <div className="w-full lg:w-[35%] mb-12 lg:mb-0 lg:ml-12 mt-8 lg:mt-0">
                                <h2 className="text-3xl font-bold  tracking-wide">
                                    {pr.name}
                                </h2>
                                <p className="text-slate-500 tracking-wide mt-6  leading-[1.7] text-xl">
                                    {pr.details}
                                </p>
                                <a href={pr.link} target="_blank">
                                    <button className='bg-blue-600 text-white w-48 py-4 font-extrabold rounded-[5px] mt-8 shadow-xl tracking-widest' >
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    )
                })

            }
        </section>
    )


} 