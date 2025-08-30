import React from 'react';
import { ReactTyped } from "react-typed";
import myPic from '../Image/abir.png'
import { motion } from "framer-motion"


const Home = () => {
    return (
        <div>
            <section id='Home' className='bg-black'>
                <div className="container w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 py-5  items-center justify-between pb-10"
                
                >
                    <motion.div className="left mt-10"
                            whileInView={{opacity:1 , y:0}}
                            initial={{opacity:0 , y:-100}}
                            transition={{duration:0.9}}
                    >
                        <h1 className='text-3xl'>Hi I'm <span> <br /> Abir Ahmed </span></h1>
                    <ReactTyped className='text-3xl md:text-4xl'
                    
                                    strings={[
                                    "Web Developer",
                                    "Graphic Designer",
                                    "Digital Marketer",
                                ]}
                                 typeSpeed={40}
                                 backSpeed={50}
                                 loop
                                >
                                 <input className='bg-black mt-6 text-red-500 font-bold w-[100%] ' type="text" />
                    </ReactTyped>
                    <p className='mt-5'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
                    <div className=" flex gap-4 mt-8">
                        <button className='h-10 bg-gray-800 hover:bg-gray-900 hover:scale-105 duration-200 text-white font-bold rounded-xl w-40' >Download CV</button>
                        <button className='h-10 bg-gray-800 hover:bg-gray-900 hover:scale-105 duration-200 text-white font-bold rounded-xl w-40' >Hire Me!</button>
                    </div>
                    </motion.div>
                    <motion.div className="Right flex md:justify-end justify-center"
                            whileInView={{opacity:1 , y:-0}}
                            initial={{opacity:0 , y:100}}
                            transition={{duration:0.9}}
                    >
                        <img className='md:w-[30vw] w-[60vw]' src={myPic} alt="" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;