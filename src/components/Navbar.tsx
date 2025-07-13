'use client';
import { useUIStore } from "@/stores/uiStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";



export default function Navbar() {
    const pathname = usePathname();

    const { isNavbarOpen, toggleNavbar } = useUIStore(state => state);
    const navRef = useRef<HTMLElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    // Close navbar when clicking outside
    useEffect(() => {
        if (!isNavbarOpen) return;
        function handleClick(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node) && btnRef.current && !btnRef.current.contains(e.target as Node)) {
                toggleNavbar(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [isNavbarOpen, toggleNavbar]);

    return (
        <>
            <nav ref={navRef} className={ `${isNavbarOpen ? '' : 'max-lg:-translate-x-64'} bg-wk-bg2 max-lg:border-r-[0.5px] max-lg:border-r-wk-text/10 transition-all text-neutral-200 min-h-screen max-h-screen h-screen w-64 fixed z-10 top-0 py-2 px-2 flex flex-col items-center justify-between` }>
                <section className="flex items-center justify-start h-fit py-3.5 w-full px-4 gap-3">
                    <div className="flex items-center justify-center w-fit bg-neutral-200 rounded-md p-0.5">
                        <Image width={ 30 } height={ 30 } src="/logo_usu.png" alt="Logo usu" />
                    </div>
                    <h1 className="text-lg font-bold ">USU - KKI</h1>
                </section>

                <section className="flex flex-col w-full min-h-full max-h-full h-full gap-2 py-3 px-4 text-base">
                    <span className="w-full text-xs text-gray-600 font-semibold">Navigasi</span>
                    <div className="flex flex-col w-full gap-1  ">
                        <Link href="/" className={`w-full text-left rounded-md px-2 py-1 ${ pathname === '/' ? 'bg-neutral-800 hover:bg-neutral-700' : 'hover:bg-neutral-800'}`}>
                            <span className="text-neutral-200 flex items-center gap-2"><i className="fal fa-gauge-high flex items-center justify-center w-4"></i> Monitor</span>
                        </Link>
                        <Link href="/replay" className={`w-full text-left rounded-md px-2 py-1 ${ pathname === '/replay' ? 'bg-neutral-800 hover:bg-neutral-700' : 'hover:bg-neutral-800'}`}>
                            <span className="text-neutral-200 flex items-center gap-2"><i className="fal fa-reply-clock flex items-center justify-center w-4"></i> Replay</span>
                        </Link>
                    </div>
                </section>

                {/* <section className="flex flex-col w-full min-h-15 h-fit mb-4 gap-1 py-3 px-4 text-base absolute bottom-0">
                    <span className="w-full text-xs text-gray-600 font-semibold">Akses</span>
                    <div className="flex flex-col w-full gap-1">
                        <Link href="/login" className="w-full text-left hover:bg-neutral-800 rounded-md px-2 py-2">
                            <span className="text-neutral-200 flex items-center gap-2"><i className="fal fa-user flex items-center justify-center w-4"></i> Login</span>
                        </Link>
                    </div>
                </section> */}
            </nav>
            <button ref={btnRef} className={`text-xl bg-wk-bg2 lg:hidden px-2 py-0.5 rounded-r-md border-[0.5px] border-l-0 border-wk-text/10 h-fit text-wk-text fixed top-8 left-0 z-51 cursor-pointer ${ isNavbarOpen ? 'translate-x-64' : 'translate-x-0'} transition-all`} type="button" onClick={() => toggleNavbar(!isNavbarOpen)}>
                <i className="fas fa-bars"></i>
            </button>
        </>
    )
}
