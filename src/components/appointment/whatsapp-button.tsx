import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/8801700000000?text=Hello%20doctor%2C%20I%20would%20like%20to%20book%20an%20appointment."
      className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 font-medium text-white transition hover:bg-emerald-600"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </Link>
  );
}
