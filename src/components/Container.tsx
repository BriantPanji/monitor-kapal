import { jetbrains } from "@/fonts";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    header: string;
    headerIcon?: string;
}


export default function Container({children, header, headerIcon}: Props) {
  return (
    <>
        <header className={`bg-wk-bg text-wk-text ${jetbrains.className} gap-2 flex items-center justify-start px-5 text-sm min-w-full w-full max-w-full h-15 min-h-15 max-h-15 rounded-t-md`}>
            <i className={`fal ${headerIcon} text-[.9rem]`}></i>
            <h1>{header} | USU </h1>
        </header>
        <div className={`min-w-full max-w-full w-full ${jetbrains.className} h-[88vh] rounded-b-md px-5 py-5  bg-wk-bg text-wk-text overflow-y-hidden overflow-x-hidden `}>
            <div className="w-full h-full min-w-full max-w-full flex items-start flex-col gap-4 overflow-y-auto scrollbar-wk rounded-sm ">
                {children}
            </div>
            <span className="fixed bottom-11 right-12 text-2xl text-wk-text/60">
                <i className="fa-thin fa-computer-mouse-scrollwheel fa-fade"></i>
            </span>
        </div>
    </>
    )
}
