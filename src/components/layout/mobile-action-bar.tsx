import Link from "next/link";
import {
  Building2,
  MessageCircle,
  Phone,
} from "lucide-react";

import { doctor } from "@/content/doctor";

export function MobileActionBar() {
  const appointmentMessage = encodeURIComponent(
    `আসসালামু আলাইকুম, আমি ${doctor.fullName}-এর অ্যাপয়েন্টমেন্ট নিতে চাই।`,
  );

  const whatsappUrl = `https://wa.me/${doctor.whatsapp}?text=${appointmentMessage}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0C2D35]/10 bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_rgba(12,45,53,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href={`tel:${doctor.phone}`}
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-xs font-bold text-[#31565B] transition hover:bg-[#F4FAF8]"
        >
          <Phone className="size-5" aria-hidden="true" />
          ফোন
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl bg-[#0E6B65] text-xs font-bold text-white"
        >
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp
        </a>

        <Link
          href="/chambers"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-xs font-bold text-[#31565B] transition hover:bg-[#F4FAF8]"
        >
          <Building2 className="size-5" aria-hidden="true" />
          চেম্বার
        </Link>
      </div>
    </div>
  );
}