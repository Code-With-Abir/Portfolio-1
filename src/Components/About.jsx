import React from "react";
import picTure from "../Image/ok.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section id="About" className="bg-black pt-4 ">
        <motion.div
          className=""
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="font-bold text-3xl text-center text-white">
            About Me
          </h1>
          <p className="w-[90%] md:w-[80%] lg:w-[70%] text-gray-500  mt-4 text-center mx-auto">
            "I am a passionate Frontend Developer and Designer with a keen eye
            for detail. I love creating visually appealing and user-friendly
            websites. Combining creativity with coding, I turn ideas into
            interactive digital experiences. Always eager to learn and take on
            new challenges."
          </p>
        </motion.div>
        <div className="container w-10/12 mx-auto py-8 grid grid-cols-1 md:grid-cols-2 items-center">
          <motion.div
            className="left flex justify-center"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={picTure}
              className="lg:w-[30vw] md:w-[50vw] w-[70vw]"
              alt=""
            />
          </motion.div>
          <motion.div
            className="right text-center md:text-start mt-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-semibold text-2xl text-white pb-8">
              Abir Ahmed ( Web Developer )
            </h1>

            <p className="text-gray-500">
              {" "}
              <span className="text-3xl font-bold text-white">
                About Myself
              </span>{" "}
              <br /> <br />I am a dedicated and versatile full stack developer
              with a passion for creating efficient and user-friendly web
              applications. With 5 years of professional experience, I have
              worked with a variety of technologies, including React, Next.js,
              Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web
              development began with a deep curiosity for how things work, and
              it has evolved into a career where I continuously strive to learn
              and adapt to new challenges. I thrive in collaborative
              environments and enjoy solving complex problems to deliver
              high-quality solutions. Outside of coding, I enjoy staying active,
              exploring new technologies, and contributing to open-source
              projects
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
