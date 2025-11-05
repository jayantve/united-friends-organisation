"use client";

import faqs from "@/Component/Faqs.json";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FaqPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl text-slate-300 font-bold  mb-4">
          Frequently Asked Questions
        </h1>
        <p className=" mb-12">
          Have questions? We have got answers. If you do not see what you are
          looking for, feel free to reach out.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg  font-bold text-seconadry0">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <p className="">Still have questions?</p>
        <a
          href="/contact"
          className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}