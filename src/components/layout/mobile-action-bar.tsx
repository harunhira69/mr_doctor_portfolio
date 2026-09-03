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
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-clinical-ink/10 bg-clinical-ivory/95 px-3 pt-2.5 shadow-[0_-12px_40px_rgb(8_47_52_/_10%)] backdrop-blur-xl md:hidden"
      style={{
        paddingBottom:
          "max(0.65rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1.5">
        {/* PHONE */}
        <a
          href={`tel:${doctor.phone}`}
          className="group flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-bold text-clinical-ink/65 transition-colors hover:bg-white hover:text-clinical-teal"
          aria-label={`ফোন করুন ${doctor.phone}`}
        >
          <Phone
            className="size-[1.15rem] transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          />

          <span>ফোন</span>
        </a>

        {/* WHATSAPP — PRIMARY */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-2xl bg-clinical-teal text-[10px] font-bold text-white shadow-[0_8px_22px_rgb(13_118_110_/_18%)] transition-all hover:bg-clinical-teal-dark"
          aria-label="WhatsApp-এ অ্যাপয়েন্টমেন্ট"
        >
          <MessageCircle
            className="size-[1.15rem]"
            aria-hidden="true"
          />

          <span>যোগাযোগ</span>
        </a>

        {/* CHAMBER */}
        <Link
          href="/chambers"
          className="group flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-bold text-clinical-ink/65 transition-colors hover:bg-white hover:text-clinical-teal"
        >
          <Building2
            className="size-[1.15rem] transition-transform group-hover:-translate-y-0.5"
            aria-hidden="true"
          />

          <span>চেম্বার</span>
        </Link>
      </div>
    </div>
  );
}