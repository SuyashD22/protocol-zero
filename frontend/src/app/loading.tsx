export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Protocol Zero themed spinner */}
        <div className="w-12 h-12 border-4 border-[#111111] border-t-[#CCFF00] rounded-full animate-spin" />
        <p className="text-[#CCFF00] font-[family-name:var(--font-mono)] text-sm tracking-widest font-black uppercase animate-pulse">
          Loading_Protocol...
        </p>
      </div>
    </div>
  );
}
