import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
const FaqPage = () => {
  const faqData = [
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial. You can cancel at any time during the trial period and you won't be charged.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel your subscription at any time.",
    },
    {
      question: "Where can I find my invoices?",
      answer:
        "You can find your invoices in the billing section of your account.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, and other common payment methods.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer:
        "Yes, we offer discounts for non-profit organizations. Contact our support for more information.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" w-1/2 mx-auto mt-8">
      <div className="text-center my-10">
        <h2>Pricing</h2>
        <h3 className="text-gray-600 mt-4 text-2xl font-normal">
          Frequently Asked Questions
        </h3>
      </div>
      <div>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 ">
            <div
              className="flex justify-between items-center text-gray-300 hover:text-white cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="text-lg font-semibold">{faq.question}</div>
              <div
                className={`${openIndex === index ? "rotate-180" : "rotate-0"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-5 transition duration-300 group-open:-rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </div>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-4 text-xl font-normal">
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
