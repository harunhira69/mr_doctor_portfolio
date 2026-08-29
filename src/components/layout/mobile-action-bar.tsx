import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { createGeneralWhatsAppUrl } from "@/lib/whatsapp";

export function MobileActionBar() {
  const whatsappUrl = createGeneralWhatsAppUrl();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#0C2D35]/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(12,45,53,0.08)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-[#0E6B65]/20 bg-[#DDF1EC] font-semibold text-[#0C2D35]"
        >
          <Phone className="size-4" aria-hidden="true" />
          কল করুন
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0E6B65] font-semibold text-white"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          অ্যাপয়েন্টমেন্ট
        </a>
      </div>
    </div>
  );
}