export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mt-3 text-lg text-slate-600">
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
