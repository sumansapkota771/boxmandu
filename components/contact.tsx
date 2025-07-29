"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      setSubmitError("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "general",
      });
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-golden/10 rounded-full">
            <span className="text-sm font-medium text-golden">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Ready to Start
            <span className="text-golden block">Your Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Boxmandu 🥊 the place to be if you want to LEARN, IMPROVE, MASTER. Want
            to start boxing now?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - Enhanced with click-to-call/email */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Location</h4>
                    <p className="text-gray-600">
                      Bouddha, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Boxmandu+Bouddha+Kathmandu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-golden hover:underline text-sm mt-1 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">
                      Branch Location
                    </h4>
                    <p className="text-gray-600">
                      Lazimpat, Kathmandu 44600
                      <br />
                      Nepal
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Boxmandu+Lazimpat+Kathmandu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-golden hover:underline text-sm mt-1 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">
                      Phone Main branch
                    </h4>
                    <a 
                      href="tel:+9813261944" 
                      className="text-gray-600 hover:text-golden transition-colors"
                    >
                      +981-3261944
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">
                      Phone Lazimpat branch
                    </h4>
                    <a 
                      href="tel:+9813261944" 
                      className="text-gray-600 hover:text-golden transition-colors"
                    >
                      +981-3261944
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Email</h4>
                    <a 
                      href="mailto:boxmanduboxinggym2080@gmail.com" 
                      className="text-gray-600 hover:text-golden transition-colors break-all"
                    >
                      boxmanduboxinggym2080@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden/10 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Sun - Fri: 6:00 AM - 8:00 PM
                      <br />
                      Sat: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Map Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Find Us</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.933248319139!2d85.355046!3d27.719347199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190ba120169f%3A0x1abd266d71082dbc!2sBoxmandu!5e0!3m2!1sen!2snp!4v1753089255166!5m2!1sen!2snp"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64"
                  title="Boxmandu Location"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href="https://maps.google.com/?q=Boxmandu+Bouddha+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-golden hover:underline text-sm"
                >
                  Get Directions to Bouddha
                </a>
                <a
                  href="https://maps.google.com/?q=Boxmandu+Lazimpat+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-golden hover:underline text-sm"
                >
                  Get Directions to Lazimpat
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">
              Send Us a Message
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="+977-9841234567"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-black mb-2"
                >
                  I'm Interested In *
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  <option value="general">General Information</option>
                  <option value="trial">Free Trial Class</option>
                  <option value="membership">Membership Plans</option>
                  <option value="personal">Personal Training</option>
                  <option value="group">Group Classes</option>
                  <option value="youth">Youth Programs</option>
                  <option value="competition">Competition Training</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell us about your goals, experience level, or any questions you have..."
                  disabled={isSubmitting}
                />
              </div>

              {/* reCAPTCHA Integration */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Default to test key
                  onChange={(token) => setRecaptchaToken(token)}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-golden hover:bg-golden/90 text-white py-3 text-lg disabled:opacity-50"
                disabled={isSubmitting || !recaptchaToken}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-golden/5 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                <strong>Free Trial Available!</strong> First-time visitors get a
                complimentary trial class. No equipment needed - we provide
                everything!
              </p>
              <div className="mt-2 flex justify-center space-x-4">
                <a 
                  href="tel:+9813261944" 
                  className="text-golden hover:underline text-sm"
                >
                  Call Now to Book
                </a>
                <span className="text-gray-400">|</span>
                <a 
                  href="mailto:boxmanduboxinggym2080@gmail.com" 
                  className="text-golden hover:underline text-sm"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}