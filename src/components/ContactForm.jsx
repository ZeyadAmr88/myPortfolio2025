"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  // Initialize EmailJS with the public key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    // Using EmailJS service with environment variables for security
    emailjs
      .send(
        "service_7x21rfk",
        "template_r33o4jt",
        {
          from_name: form.name,
          to_name: "Zeyad Amr",
          from_email: form.email,
          to_email: "zeyad8amr88@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false)
        setSuccess(true)
        setForm({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
        console.error("Error sending email:", error)
      })
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900  focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            autoComplete="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white  text-gray-900  focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700  mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Hello, I'd like to talk about..."
            required
            rows={6}
            autoComplete="off"
            className="w-full px-4 py-3 rounded-lg border border-gray-300  bg-white  text-gray-900  focus:outline-none focus:ring-2 focus:ring-slate-500 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-lg bg-accent hover:bg-gray-900 text-white font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-green-600 text-center"
          >
            Your message has been sent successfully!
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-600 text-center"
          >
            Something went wrong. Please try again later.
          </motion.p>
        )}
      </motion.form>
    </div>
  )
}

export default ContactForm
