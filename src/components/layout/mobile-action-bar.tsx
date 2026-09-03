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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-clinical-ink/10 bg-[#FBFAF6]/95 px-3 pt-2.5 shadow-[0_-10px_40px_rgba(8,31,37,0.10)] backdrop-blur-xl pb-[max(0.65rem,env(safe-area-inset-bottom))] md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-1.5">
        {/* Phone */}
        <a
          href={`tel:${doctor.phone}`}
          className="group flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-clinical-ink transition-colors duration-200 active:bg-clinical-ivory"
          aria-label="ফোনে যোগাযোগ করুন"
        >
          <Phone
            className="size-[18px] text-clinical-ink/70 transition-transform duration-200 group-active:scale-95"
            aria-hidden="true"
          />

          <span className="text-[11px] font-bold">
            ফোন
          </span>
        </a>

        {/* Primary consultation action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl bg-clinical-teal text-white shadow-sm transition-all duration-200 active:scale-[0.98] active:bg-clinical-teal-dark"
          aria-label="WhatsApp-এ অ্যাপয়েন্টমেন্ট নিন"
        >
          <MessageCircle
            className="size-[18px]"
            aria-hidden="true"
          />

          <span className="text-[11px] font-bold">
            পরামর্শ
          </span>
        </a>

        {/* Chambers */}
        <Link
          href="/chambers"
          className="group flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-clinical-ink transition-colors duration-200 active:bg-clinical-ivory"
          aria-label="চেম্বারের তথ্য দেখুন"
        >
          <Building2
            className="size-[18px] text-clinical-ink/70 transition-transform duration-200 group-active:scale-95"
            aria-hidden="true"
          />

          <span className="text-[11px] font-bold">
            চেম্বার
          </span>
        </Link>
      </div>
    </div>
  );
}