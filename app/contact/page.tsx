"use client"

import { useState } from "react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);

    // 1. Grab all the data from the form using the weird Google entry IDs
    const formData = new FormData(e.currentTarget);
    
    // 2. The silent submission trick using fetch & 'no-cors'
    try {
      await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSegYiO_dzetI_etS2ddp8gYI-0z-zlFP8QOf3ZA3hwPL_Fxyw/formResponse", 
        {
          method: "POST",
          body: formData,
          mode: "no-cors" // This is the magic word that prevents browser security errors!
        }
      );
      
      // Stop the loading state and show the success message
      setIsSubmitting(false);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error("Submission failed", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="animate-fadeIn max-w-2xl">
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 inline-block pb-2">
          Contact Me
        </h2>
        
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">
          Whether you have a question, comment, or concern, I'd love to hear from you. Let's connect!
        </p>

        {isSubmitted ? (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Message Sent!</h3>
            <p className="text-blue-700">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-semibold underline text-sm"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              {/* Notice the "name" attribute matches the Google ID! */}
              <input 
                type="text" 
                name="entry.858316082" 
                id="name" 
                required 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                placeholder="Jane Doe" 
                disabled={isSubmitting} 
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                name="entry.220576862" 
                id="email" 
                required 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" 
                placeholder="jane@example.com" 
                disabled={isSubmitting} 
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                name="entry.838917451" 
                id="message" 
                rows={5} 
                required 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" 
                placeholder="What's on your mind?" 
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`${isSubmitting ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto self-start shadow-sm`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}