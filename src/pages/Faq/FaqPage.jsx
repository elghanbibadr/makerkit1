import React, { useState } from "react";
import arrow from "../../assets/arrow2.svg"
import { faqData } from "../../../public/data/data";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => setOpenIndex((prevIndex) => (prevIndex === index ? null : index))


  return (
    <div className=" md:w-1/2 mx-auto mt-20">
      <div className="text-center my-10">
        <h1 className="text-white">FAQ</h1>
        <h3 className="gradient-text mt-10 mb-16 ">
          Frequently Asked Questions
        </h3>
      </div>
      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6 ">
            <div
              className="flex justify-between items-center text-gray-300 hover:text-white cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
               <h5 >{faq.question}</h5>
             
              <img className={`h-4 ${openIndex === index ? "-rotate-90" : "rotate-90"} duration-300`} src={arrow}  alt="arrow"/>
            </div>
            {openIndex === index && (
              <p className=" mt-4 text-small-gray ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
