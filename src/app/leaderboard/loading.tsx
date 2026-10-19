/** Skeleton while the route's data streams in (shapes mirror the real layout; no fake numbers). */
export default function Loading() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-10 sm:px-6" aria-busy="true">
      <div className="ace-skel h-36 rounded-3xl" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="ace-skel h-28" />
        <div className="ace-skel h-28" />
        <div className="ace-skel h-28" />
        <div className="ace-skel h-28" />
      </div>
      <div className="ace-skel h-64" />
    </main>
  );
}
