import * as Accordion from "@radix-ui/react-accordion";
import { ChevronsUpDown } from "lucide-react";

const faqs = [
  {
    question: "What makes this trading course different from others?",
    answer:
      "Our course combines theoretical knowledge with practical, real-world trading strategies. You'll learn from an instructor with 15+ years of experience and access to live trading sessions where you can see strategies in action."
  },
  {
    question: "Do I need any prior trading experience?",
    answer:
      "No prior experience is required! The course starts with fundamentals and gradually progresses to advanced strategies. Whether you're a complete beginner or have some trading experience, you'll find valuable insights."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our trading course
          </p>
        </div>
        <Accordion.Root className="space-y-4" type="multiple" defaultValue={["faq_0"]}>
          {faqs.map((f, indx) => (
            <Accordion.Item
              key={indx}
              value={`faq_${indx}`}
              className="bg-gray-900 border border-gray-700 rounded-lg"
            >
              <Accordion.Trigger className="w-full rounded-lg p-4 flex items-center justify-between hover:bg-gray-800 data-[state=open]:rounded-b-none">
                <span className="text-left font-medium text-xl block me-1">{f.question}</span>
                <ChevronsUpDown className="shrink-0 text-purple-400" size={20} />
              </Accordion.Trigger>
              <Accordion.Content className="px-4 pb-4 pt-1 text-lg text-gray-300">
                {f.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
