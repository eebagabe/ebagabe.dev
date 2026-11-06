const DEFAULT_NUMBER = "5582991828178";
const MESSAGE = "Olá! Quero um orçamento para um site ou sistema.";

function resolveNumber(raw: string | undefined): string {
  const digits = (raw ?? "").trim();
  return /^\d{10,15}$/.test(digits) ? digits : DEFAULT_NUMBER;
}

export const WHATSAPP_URL = `https://wa.me/${resolveNumber(
  import.meta.env.VITE_WHATSAPP_NUMBER,
)}?text=${encodeURIComponent(MESSAGE)}`;

export const PHONE_DISPLAY = "+55 82 99182-8178";
