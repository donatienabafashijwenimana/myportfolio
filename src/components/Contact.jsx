import { useState } from "react";
import { Mail, Phone, MapPin, Send, GitFork, Link2, MessageCircle } from "lucide-react";
import { SectionHeader } from "./Skills";

// Delivery targets for the form. Web3Forms is the primary email API (its access
// key is meant to be public, so it is safe in a static build); FormSubmit is kept
// as a fallback for when VITE_WEB3FORMS_ACCESS_KEY is not configured. WhatsApp
// opens a pre-filled chat so the same message also lands on the phone.
const CONTACT_EMAIL = "donaabafashijwe@gmail.com";
const CONTACT_PHONE = "+250792458446";
const WHATSAPP_NUMBER = "250792458446";
const EMAIL_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

async function deliverByEmail(form, signal) {
  if (WEB3FORMS_KEY) {
    // FormData keeps this a CORS-safelisted request: a JSON content type would
    // trigger a preflight that the API does not answer.
    const body = new FormData();
    body.append("access_key", WEB3FORMS_KEY);
    body.append("subject", form.subject || "Portfolio contact message");
    body.append("from_name", form.name || "Website visitor");
    body.append("email", form.email);
    body.append("message", form.message);

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body,
      signal,
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false) {
      throw new Error(result.message || "Message could not be sent.");
    }
    return;
  }

  const response = await fetch(EMAIL_ENDPOINT, {
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
    signal,
  });

  if (!response.ok) {
    throw new Error("Message could not be sent.");
  }
}

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

    // The email providers can hang for half a minute when they are unhealthy;
    // fail fast so the visitor gets the WhatsApp / direct-email alternatives.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      await deliverByEmail(form, controller.signal);

      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError(
        "The email service did not respond. Send the same message on WhatsApp, or email me directly:",
      );
    } finally {
      clearTimeout(timeout);
      setSending(false);
    }
  };

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    form.subject || "Portfolio contact message",
  )}&body=${encodeURIComponent(
    [form.message, form.name && `From: ${form.name}`, form.email && `Email: ${form.email}`]
      .filter(Boolean)
      .join("\n\n"),
  )}`;

  const handleWhatsApp = () => {
    if (!form.message.trim()) {
      setError("Write your message first, then send it to WhatsApp.");
      return;
    }
    setError("");
    const text = [
      form.subject && `Subject: ${form.subject}`,
      form.message,
      form.name && `From: ${form.name}`,
      form.email && `Email: ${form.email}`,
    ]
      .filter(Boolean)
      .join("\n\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="absolute left-0 bottom-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="// contact"
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-3">
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
                { icon: Mail, label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: MessageCircle, label: "WhatsApp +250 792 458 446", href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: Phone, label: "+250 792 458 446", href: `tel:${CONTACT_PHONE}` },
                { icon: MapPin, label: "Available worldwide (remote)", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg glass flex items-center justify-center group-hover:border-blue-500/30 transition-colors shrink-0">
                    <Icon size={15} />
                  </div>
                  <span className="text-sm break-words">{label}</span>
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
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-5 sm:p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2 mb-4">
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
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-200 placeholder:text-slate-600 transition-all focus:border-blue-500/50 focus:bg-white/10 focus:outline-none sm:text-sm resize-none"
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={sending}
                  className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm transition-all ${
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
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex flex-1 items-center justify-center gap-2 py-3 rounded-xl glass font-medium text-sm text-emerald-300 transition-all hover:text-white hover:border-emerald-500/40"
                >
                  <MessageCircle size={15} />
                  Send on WhatsApp
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                “Send Message” emails me directly. “Send on WhatsApp” opens the
                same message in WhatsApp for a faster reply.
              </p>
              {error && (
                <div className="mt-3 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3">
                  <p className="text-sm text-rose-300">{error}</p>
                  <a
                    href={mailtoHref}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-rose-200 underline underline-offset-2 hover:text-white"
                  >
                    <Mail size={14} /> {CONTACT_EMAIL}
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, name, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium text-slate-400 mb-1.5 uppercase tracking-wider"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-slate-200 placeholder:text-slate-600 transition-all focus:border-blue-500/50 focus:bg-white/10 focus:outline-none sm:text-sm"
      />
    </div>
  );
}
