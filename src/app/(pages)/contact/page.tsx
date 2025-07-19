import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="py-[5rem] mx-[1.5rem]">
      <div className="lg:grid flex flex-col lg:gap-[1rem] gap-[1.2rem] grid-cols-2">

        
        <Image src={'/1.jpg'} width={500} height={500} quality={100} alt="" className="lg:w-[90%] w-full  lg:h-[33rem] h-[25rem] object-cover"/>

        <div>
          <h1 className="lg:text-[3rem] text-[2.5rem]">CONTACT US</h1>

          <form
            className="w-full max-w-[35rem] flex flex-col gap-[1.5rem] lg:mt-[2rem] mt-[1rem]"
            id="form"
          >
            <div className="flex items-center border-b border-[#000] py-2">
              <input
                className="placeholder:text-[#000] placeholder:opacity-[.6] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.8rem]"
                type="text"
                placeholder="Your name?"
                aria-label="Full name"
              />
            </div>

            <div className="flex items-center border-b border-[#000] py-2">
              <input
                className="placeholder:text-[#000] placeholder:opacity-[.6] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.8rem]"
                type="email"
                placeholder="Your email?"
                aria-label="Email"
              />
            </div>

            <div className="flex items-center border-b border-[#000] py-2">
              <input
                className="placeholder:text-[#000] placeholder:opacity-[.6] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.8rem]"
                type="number"
                placeholder="Your number?"
                aria-label="Number"
              />
            </div>

            <div className="flex items-center border-b border-[#000] py-2">
              <input
                className="placeholder:text-[#000] placeholder:opacity-[.6] appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none lg:text-[2rem] text-[1.8rem]"
                type="text"
                placeholder="Message?"
                aria-label="Message"
              />
            </div>

            <button  className="flex w-full justify-center rounded-[calc(7vw)] bg-black py-[1rem] text-white cursor-pointer lg:text-[1.8rem] text-[1.5rem]">Send</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
