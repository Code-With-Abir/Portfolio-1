import React from "react";
import picIcon from "../Image/abir.png";
import { motion } from "framer-motion";

const Rating = () => {
  return (
    <div>
      <section className="bg-black py-12" id="Rating">
        <motion.div
          className=""
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="font-bold text-3xl text-center text-white">
            Rating Me
          </h1>
          <p className="w-[90%] md:w-[80%] lg:w-[70%] text-gray-500  mt-4 text-center mx-auto">
            Please rate my work based on your experience. Your feedback helps me
            improve and deliver better results
          </p>
        </motion.div>
        <div className="container w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 py-8 items-center gap-10">
          <div
            className="left border flex-col flex px-2 border-gray-400 items-center mt-4 rounded-3xl hover:border-yellow-400 duration-300 py-12
                    "
          >
            <div className=" bg-transparent w-[40%] md:w-[20%] flex items-center justify-center my-auto rounded-full mt-6 ">
              <img
                className="md:w-[6vw] rounded-full w-[20vw]"
                src={picIcon}
                alt=""
              />
            </div>
            <h1 className="text-4xl font-bold text-white mt-8">Abir Ahmed</h1>
            <h1 className="text-gray-500 mt-1">(MERN Stack Develper)</h1>
            <p className="mt-6 w-[90%] md:w-[80%] mx-auto text-center">
              "I’m a Frontend Developer and Designer. I craft visually appealing
              and user-friendly web interfaces. My goal is to turn ideas into
              interactive digital experiences."
            </p>
            <div class="rating rating-lg rating-half mt-6">
              <input type="radio" name="rating-10" class="rating-hidden" />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-1 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-2 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-1 bg-yellow-600"
                checked="checked"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-2 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-1 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-2 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-1 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-2 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-1 bg-yellow-600"
              />
              <input
                type="radio"
                name="rating-10"
                class="mask mask-star-2 mask-half-2 bg-yellow-600"
              />
            </div>
          </div>
          <motion.div
            className="right mt-4 space-y-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.9 }}
          >
            <div class="collapse collapse-plus bg-base-200 py-4 border hover:border-yellow-400 duration-200 border-transparent ">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div class="collapse-title text-xl font-bold text-white">
                Who am I?
              </div>
              <div class="collapse-content">
                <p className="text-gray-400 ">
                  I am Abir Ahmed (MERN Stack Develper)
                </p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-200 py-4 border hover:border-yellow-400 duration-200 border-transparent ">
              <input type="radio" name="my-accordion-3" />
              <div class="collapse-title text-xl font-bold text-white">
                My skill?
              </div>
              <div class="collapse-content">
                <p className="text-gray-400 ">
                  <ol className="">
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                    <li>Tailwind</li>
                    <li>React js</li>
                    <li>Node js</li>
                    <li>Mongo Db</li>
                  </ol>
                </p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-200 py-4 border hover:border-yellow-400 duration-200 border-transparent ">
              <input type="radio" name="my-accordion-3" />
              <div class="collapse-title text-xl font-bold text-white">
                My Location?
              </div>
              <div class="collapse-content">
                <p className="text-gray-400 ">
                  Nawabganj, Dhaka , Sholla ( Sholla High School And Collage )
                </p>
              </div>
            </div>
            <div class="collapse collapse-plus bg-base-200 py-4 border hover:border-yellow-400 duration-200 border-transparent ">
              <input type="radio" name="my-accordion-3" />
              <div class="collapse-title text-xl font-bold text-white">
                My Github?
              </div>
              <div class="collapse-content">
                <p className="text-gray-400 ">
                  https://github.com/Code-With-Abir
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rating;
