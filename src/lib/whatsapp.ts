export const whatsappNumber = "8801700000000";

export function buildWhatsAppLink(message = "Hello doctor, I would like to book an appointment.") {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}
