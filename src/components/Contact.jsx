import { useState } from "react";
import { Heading } from "./components.js";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.disabled;
    setSending(true);
    const formData = new FormData(e.target);

    formData.append("access_key", "78f95c08-4427-4edb-b5bc-bf82e95f5720");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Email Successfully Submitted", {
        position: "top-right",
      });
    } else {
      console.log("Error", data);
      toast.error("There is a problem! Please try again later.", {
        position: "top-right",
      });
    }
    setSending(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <Heading
        text1="Contact"
        text2="With Us"
        para="Let's build a brighter future together"
      />

      <div className="flex justify-center items-center py-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl w-full"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <fieldset
            disabled={`${sending ? "disabled" : ""}`}
            className="grid gap-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="3e4ba4db-8cff-40ac-84d8-84d00a13d464"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  id="name"
                  name="name"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 ring-1 ring-black/20 rounded-sm focus:outline-none focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  id="email"
                  name="email"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 ring-1 ring-black/20 rounded-sm focus:outline-none focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-gray-700">
                Your Message
              </label>
              <textarea
                value={message}
                id="message"
                name="message"
                required={true}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 ring-1 ring-black/20 rounded-sm focus:outline-none focus:ring-indigo-500 transition duration-300 resize-none"
                rows="8"
                placeholder="Type your message here"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-6 bg-indigo-500 text-white font-semibold rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
              >
                {sending ? "Sending ...." : "Send"}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
