import React from 'react';
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <div>
            <section className='bg-black pb-3 '>
                <motion.div className="container w-10/12 mx-auto"
                                          whileInView={{opacity:1 , y:0}}
                                          initial={{opacity:0 , y:-100}}
                                          transition={{duration:0.9}}
                >
                    <h1 className='text-gray-400 font-semibold text-center text-xs md:text-sm'>Copyright © 2024, Abir Ahmed | All Rights Reserved</h1>
                    <div className="border border-b-1 border-gray-600 mt-1"></div>
                </motion.div>
                
            </section>
        </div>
    );
};

export default Footer;