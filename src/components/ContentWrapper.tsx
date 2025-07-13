import { ReactNode } from "react";

export default function ContentWrapper({children}: {children: ReactNode}) {
  return (
    <section className="w-full flex flex-row items-stretch gap-x-4 gap-y-2 flex-wrap">
        {children}
    </section>
  )
}
