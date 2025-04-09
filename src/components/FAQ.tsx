"use client";

import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // Icons for + and x

const faqs = [
  { question: "What is MicroGPT?", answer: "MicroGPT revolutionizes how developers work, offering contextual support at every stage of the software development process. From providing code completions and chat support within IDEs to explaining code and answering documentation queries on GitHub, MicroGPT enhances the entire development workflow. It enables developers to concentrate on adding value, fostering innovation, and experiencing greater job satisfaction." },
  { question: "What data has MicroGPT been trained on?", answer: "MicroGPT is powered by generative AI models developed by MicroGPT, OpenAI, and Microsoft. It has been trained on natural language text and source code from publicly available sources, including code in public repositories on GitHub." },
  { question: "Is MicroGPT free?", answer: "LYes there is a freemium tier! But make sure to check out our pricing page to see which tier best suits you!" },
  { question: "What languages, IDEs and platforms does MicroGPT support?", answer: "MicroGPT has been trained on a vast array of languages present in public repositories. The efficacy of its suggestions may vary based on the amount and diversity of the training data available for each language. For instance, languages like JavaScript, which are abundantly represented in public repositories, receive superior support from MicroGPT. Conversely, languages with less representation might yield less comprehensive or less accurate suggestions." },
  { question: "Does MicroGPT 'copy/paste'?", answer: "No, MicroGPT generates suggestions using probabilistic determination" },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className=" rounded-lg shadow-md">
            {/* Question Section */}
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800 transition"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-lg font-semibold">{faq.question}</p>
              {openIndex === index ? (
                <FaTimes className="text-white" />
              ) : (
                <FaPlus className="text-white" />
              )}
            </div>

            {/* Answer Section (Collapsible) */}
            {openIndex === index && (
              <div className="p-4 border-t border-gray-700">
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="mt-6 bg-purple-900 text-white p-4 rounded-lg flex justify-between items-center">
        <span className="font-semibold">For more Questions</span>
        <a href="mailto:contact@microGPT.io" className="flex items-center gap-2">
          ✉️ contact@microGPT.io
        </a>
      </div>
    </div>
  );
};

export default FAQ;
