export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 rounded-full border border-slate-200 bg-white p-2 shadow-lg md:hidden">
      <div className="flex items-center justify-between gap-2 text-sm font-medium text-slate-700">
        <a href="/contact" className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-center">Call</a>
        <a href="https://wa.me/8801700000000" className="flex-1 rounded-full bg-emerald-500 px-4 py-2 text-center text-white">WhatsApp</a>
      </div>
    </div>
  );
}
