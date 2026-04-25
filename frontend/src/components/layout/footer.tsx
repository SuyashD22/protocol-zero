import Link from "next/link";
import { Terminal, Globe, Mail, Link as LinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#CCFF00]/20 bg-[#0A0A0A] pt-10 pb-6 font-[family-name:var(--font-mono)] text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-[#CCFF00] p-1 rounded-sm">
                <Terminal className="w-5 h-5 text-black" strokeWidth={3} />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase font-[family-name:var(--font-heading)]">
                Protocol_Zero
              </span>
            </Link>
            <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
              [sys.log]: Bridging the gap between academic theory and industry reality. Elite technical placement training.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 bg-black border border-white/10 text-neutral-400 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-all hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-black border border-white/10 text-neutral-400 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-all hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-black border border-white/10 text-neutral-400 hover:text-[#CCFF00] hover:border-[#CCFF00] transition-all hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 text-base uppercase">Directory</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-neutral-500 hover:text-[#CCFF00] transition-colors flex items-center gap-2"><span className="text-[#CCFF00] opacity-50">&gt;</span> Home</Link></li>
              <li><Link href="/about" className="text-neutral-500 hover:text-[#CCFF00] transition-colors flex items-center gap-2"><span className="text-[#CCFF00] opacity-50">&gt;</span> About Us</Link></li>
              <li><Link href="/events" className="text-neutral-500 hover:text-[#CCFF00] transition-colors flex items-center gap-2"><span className="text-[#CCFF00] opacity-50">&gt;</span> Events</Link></li>
              <li><Link href="/portfolio" className="text-neutral-500 hover:text-[#CCFF00] transition-colors flex items-center gap-2"><span className="text-[#CCFF00] opacity-50">&gt;</span> Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-base uppercase">System</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2"><span className="text-neutral-600">#</span> Privacy Policy</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2"><span className="text-neutral-600">#</span> Terms of Service</Link></li>
              <li><Link href="#" className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2"><span className="text-neutral-600">#</span> Code of Conduct</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-neutral-600">
          <p>root@protocol-zero:~# {new Date().getFullYear()} copyright initialized.</p>
          <p className="mt-2 md:mt-0">status: operational_</p>
        </div>
      </div>
    </footer>
  );
}
