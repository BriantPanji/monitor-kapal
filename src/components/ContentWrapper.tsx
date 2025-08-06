import { ReactNode } from "react";

export default function ContentWrapper({children}: {children: ReactNode}) {
  return (
    <section className="w-full flex flex-row justify-center items-stretch gap-x-4 gap-y-2 flex-wrap">
        {children}
    </section>
  )
}
