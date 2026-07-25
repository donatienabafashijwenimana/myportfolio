import { useState } from "react";
import { Mail, Phone, MapPin, Send, GitFork, Link2 } from "lucide-react";
import { SectionHeader } from "./Skills";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/donaabafashijwe@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio contact message",
          message: form.message,
          _subject: `Portfolio message from ${form.name || "Website visitor"} (${form.email})`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Message not sent. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full bg-blue-600/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-700 text-white text-xl mb-3">
                Let's build something great
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                I'm open to freelance work, full-time opportunities, and
                collaborative projects. Whether it's a startup MVP or an
                enterprise system, I can help you ship it.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "donaabafashijwe@gmail.com", href: "mailto:donaabafashijwe@gmail.com" },
                { icon: Phone, label: "+250 792 458 446", href: "tel:+250792458446" },
                { icon: MapPin, label: "Available worldwide (remote)", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg glass flex items-center justify-center group-hover:border-blue-500/30 transition-colors shrink-0">
                    <Icon size={15} />
                  </div>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: GitFork, href: "#", label: "GitHub" },
                { icon: Link2, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <InputField
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <InputField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry..."
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={sending}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all ${
                  sent
                    ? "bg-emerald-600 text-white"
                    : sending
                      ? "bg-slate-700 text-slate-300 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-500 hover:-translate-y-0.5 glow-blue"
                }`}
              >
                {sending ? (
                  "Sending..."
                ) : sent ? (
                  "✓ Message Sent!"
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>
              {error && (
                <p className="mt-3 text-sm text-rose-300">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
      />
    </div>
  );
}
