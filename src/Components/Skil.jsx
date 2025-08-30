import React from 'react';
import { IoCodeSlash } from "react-icons/io5";
import { IoColorFilter } from "react-icons/io5";
import { RiHomeOfficeLine } from "react-icons/ri";
import { motion } from "framer-motion"


const Skil = () => {
    return (
        <div id='Skill'>
            <section id='Skill' className='bg-black py-12 '>
                <motion.div className=""
                        whileInView={{opacity:1 , y:0}}
                        initial={{opacity:0 , y:-100}}
                        transition={{duration:0.9}}>
                    <h1 className='font-bold text-3xl text-center text-white'>My skills <br /> I have developed</h1>
                    <p className='w-[90%] md:w-[80%] lg:w-[70%] text-gray-500  mt-4 text-center mx-auto'>I’m a designer and web developer who blends visual creativity with technical precision. My designs aren’t just eye-catching—they’re crafted to enhance user experience and drive results. I build responsive websites, brand identities, and user-focused layouts with professional finesse. Every project I take on prioritizes clarity, speed, and client satisfaction.</p>
                </motion.div>
                <div className="container w-10/12 mx-auto mt-12">
                    <div className="carts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                    {/* cart1 */}
                        <motion.div className=" border border-gray-400  space-y-6 p-8 rounded-3xl flex-col flex hover:scale-95 cursor-pointer duration-200 items-center hover:border-yellow-300  
                        "
                        whileInView={{opacity:1 , y:0}}
                        initial={{opacity:0 , y:-100}}
                        transition={{duration:0.3}}
                        >
                        <IoCodeSlash className='text-8xl text-white text-center' />
                        <h1 className='text-3xl font-black text-white mt-2 text-center'>Web Development</h1>
                        <p className='text-gray-400 text-center'>I am skilled in web development, creating responsive, user-friendly, and visually appealing websites with both front-end and back-end expertise.</p>
                        <button className='w-[100%] bg-gray-800 py-3 rounded-lg  text-white font-bold hover:bg-gray-900 hover:scale-105 duration-200'>Hire me</button>
                        </motion.div>
                    {/* cart2 */}
                    <motion.div className=" border border-gray-400  space-y-6 p-8 rounded-3xl flex-col flex hover:scale-95 cursor-pointer duration-200 items-center hover:border-yellow-300  "
                                                whileInView={{opacity:1 , y:0}}
                                                initial={{opacity:0 , y:-100}}
                                                transition={{duration:0.6}}
                                                
                    >
                        <IoColorFilter className='text-8xl text-white text-center' />
                        <h1 className='text-3xl font-black text-white mt-2 text-center'>Graphic Design</h1>
                        <p className='text-gray-400 text-center'>I specialize in creative graphic design, producing professional logos, branding, posters, and social media visuals that leave a lasting impression.</p>
                        <button className='w-[100%] bg-gray-800 py-3 rounded-lg  text-white font-bold hover:bg-gray-900 hover:scale-105 duration-200'>Hire me</button>
                        </motion.div>
                    {/* cart3 */}
                    <motion.div className=" border border-gray-400  space-y-6 p-8 rounded-3xl flex-col flex hover:scale-95 cursor-pointer duration-200 items-center hover:border-yellow-300  "
                                                whileInView={{opacity:1 , y:0}}
                                                initial={{opacity:0 , y:-100}}
                                                transition={{duration:0.9}}
                    >
                        <RiHomeOfficeLine className='text-8xl text-white text-center' />
                        <h1 className='text-3xl font-black text-white mt-2 text-center'>Digital Marketing</h1>
                        <p className='text-gray-400 text-center'>Experienced in digital marketing, leveraging social media, SEO, and content to grow brands</p>
                        <button className='w-[100%] bg-gray-800 py-3 rounded-lg  text-white font-bold hover:bg-gray-900 hover:scale-105 duration-200'>Hire me</button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skil;