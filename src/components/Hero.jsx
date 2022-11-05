import { React, useState } from "react";
import { AnimatePresence } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from "../images";
import Modal from "../Modal";
import useAuth from "../hooks/useAuth";
function Hero() {
  const [showModal, setShowModal] = useState();
  const {token} = useAuth()
  return (
   
    //  
    <div className="scrollbar-hide bg-vector1   overflow-y-auto">
     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ellipse1 hidden md:block"
      ></motion.div>
     
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-16 md:mt-24 px-3 sm:px-6 max-w-[1240px] mx-auto  flex gap-8 flex-col items-center sm:flex-row justify-between flex-wrap md:flex-nowrap"
    >
      <div className="flex flex-col flex-1 w-full justify-end">
        <h3 className="text-white font-audio text-5xl  xl:text-7xl ">
          <span className="block">Welcome Users</span>{" "}
          <span className="block md:inline">Make sure you log in</span> to access the game 
        </h3>
        <div className="mt-12 flex  small:flex-row small:items-center">
          {!token && (
            <Link
            to="/login"
            className="inline-block bg-black w-fit px-10 py-3 text-center  rounded-md shadow"
          >
            Login
          </Link>
          )}
          <div className="flex ml-8 ">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="px-9 py-3 uppercase text-white rounded-lg border-[1px] font-semibold text-base tracking-widest transition-all hover:bg-white focus:bg-white hover:text-dark-text focus:text-dark-text bg-transparent border-white"
            >
              Rules
            </button>
          </div>
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed"
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                exit={{ opacity: 0 }}
              >
                <Modal setShowModal={setShowModal} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex-1 w-full">
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full"
         
          src={images.desktop}
         
         
        />
      </div>
    </motion.div>
  
     
    </div>

  );
}

export default Hero;
