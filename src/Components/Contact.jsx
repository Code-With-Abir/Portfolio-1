import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const Contact = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <section className="pt-6 pb-1 bg-black underline" id="Contact">
        <motiondiv
          className=""
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="font-bold text-3xl text-center text-white">
            Contact Me
          </h1>
          <p className="w-[90%] md:w-[80%] lg:w-[70%] text-gray-500  mt-4 text-center mx-auto">
            "Have a project in mind or just want to say hi? Feel free to reach
            out! I’m always open to discussing new ideas, collaborations, or
            opportunities. Let’s create something amazing together."
          </p>
        </motiondiv>
        <div className="container w-10/12 mx-auto py-6 gap-4 grid grid-cols-1 md:grid-cols-2 mt-4 ">
          <motion.div
            className=" space-y-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.9 }}
          >
            <div className=" flex gap-2">
              <input
                className=" border border-transparent hover:border-yellow-400 duration-200 outline-none w-[50%] bg-gray-950 font-semibold py-4 rounded-2xl px-6"
                type="text"
                name=""
                id=""
                placeholder="Type Your Name"
              />
              <input
                className=" border border-transparent hover:border-yellow-400 duration-200 outline-none w-[50%] bg-gray-950 font-semibold py-4 rounded-2xl px-6"
                type="email"
                name=""
                id=""
                placeholder="Type Your Email"
              />
            </div>
            <textarea
              className=" border border-transparent hover:border-yellow-400 duration-200 outline-none resize-none w-full py-4 rounded-2xl bg-gray-950 font-semibold px-4 h-[40%]"
              name=""
              id=""
              placeholder="What's your Mind?"
            ></textarea>
            <div className=" flex gap-2">
              <input
                className=" border border-transparent hover:border-yellow-400 duration-200 outline-none w-[50%] bg-gray-950 font-semibold py-4 rounded-2xl px-6"
                type="Number"
                name=""
                id=""
                placeholder="Contact Number"
              />
              <input
                className=" border border-transparent hover:border-yellow-400 duration-200 outline-none w-[50%] bg-gray-950 font-semibold py-4 rounded-2xl px-6"
                type="text"
                name=""
                id=""
                placeholder="Your Location"
              />
            </div>
          </motion.div>
          <motion.div
            className=""
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.9 }}
          >
            <textarea
              className=" border border-transparent hover:border-yellow-400 duration-200 outline-none resize-none w-full mt-4 md:mt-0 py-4 rounded-2xl bg-gray-950 font-semibold px-4 h-full "
              placeholder="Write Now"
              name=""
              id=""
            ></textarea>
          </motion.div>
        </div>
        <motion.div
          className="w-10/12 mx-auto"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex justify-between items-center">
            <button className="bg-slate-600 font-bold py-3 rounded-3xl px-10">
              Submit Now
            </button>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-50 ">
              <div className="">
                <FaArrowUp
                  onClick={() => scrollToSection("Home")}
                  className="text-black font-black cursor-pointer"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-10/12 mx-auto border border-gray-600 mt-8 border-b-1"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
        ></motion.div>
      </section>
    </div>
  );
};

export default Contact;
