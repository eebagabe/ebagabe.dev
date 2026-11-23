const DEFAULT_NUMBER = "5582993506973";
const MESSAGE = "Olá, Gabriel! Vi seu portfólio e quero conversar sobre uma oportunidade.";

function resolveNumber(raw: string | undefined): string {
  const digits = (raw ?? "").trim();
  return /^\d{10,15}$/.test(digits) ? digits : DEFAULT_NUMBER;
}

export const WHATSAPP_URL = `https://wa.me/${resolveNumber(
  import.meta.env.VITE_WHATSAPP_NUMBER,
)}?text=${encodeURIComponent(MESSAGE)}`;

export const PHONE_DISPLAY = "+55 82 99350-6973";
