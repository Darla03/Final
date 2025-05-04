import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import axios from 'axios';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", form); 
      setStatus("Message sent!");
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus("Failed to send message 2.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>

      <div className="flex justify-center space-x-6 text-3xl text-gray-600">
        <a
  href="mailto:darlene.yovana@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center text-offwhite bg-softblue px-4 py-2 rounded-full hover:bg-navy transition"
>
  <FaEnvelope className="mr-2" />
 Email
</a>


        {/* GitHub icon */}
        <a
  href="https://github.com/Darla03"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center text-offwhite bg-bluegray px-4 py-2 rounded-full hover:bg-navy transition"
>
  <FaGithub className="mr-2" />
  GitHub
</a>

        {/* LinkedIn icon */}
        <a
  href="https://linkedin.com/in/darlene-wyatt-54b391255"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center text-offwhite bg-steel px-4 py-2 rounded-full hover:bg-softblue transition"
>
  <FaLinkedin className="mr-2" />
  LinkedIn
</a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-xl space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-steel text-white px-4 py-2 rounded hover:bg-softblue">
          Send
        </button>
        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
}

export default Contact;
