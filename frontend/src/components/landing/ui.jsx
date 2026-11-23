import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, CTA_LABEL, CTA_NOTE, AGE_NOTE } from "@/config/site";

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
);

export const Reveal = ({ children, className = "", delay = 0, as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ y: 28, opacity: 0.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
};

export const Slash = ({ className = "" }) => (
  <span aria-hidden="true" className={`slash ${className}`} />
);

export const CtaButton = ({ id, note = false, age = false, align = "left", dark = false }) => (
  <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start"}`}>
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`cta-${id}`}
      aria-label={`${CTA_LABEL} (si apre WhatsApp in una nuova scheda)`}
      className="cta-btn group"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-rotate-12" />
      <span>{CTA_LABEL}</span>
    </a>
    {note && (
      <p data-testid={`cta-note-${id}`} className={`text-sm ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
        {CTA_NOTE}
      </p>
    )}
    {age && (
      <p data-testid={`cta-age-${id}`} className="max-w-md text-[0.8125rem] leading-snug text-zinc-600">
        {AGE_NOTE}
      </p>
    )}
  </div>
);

export const Num = ({ n, className = "" }) => (
  <span aria-hidden="true" className={`num font-display ${className}`}>
    {String(n).padStart(2, "0")}
  </span>
);
