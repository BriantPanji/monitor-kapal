



export default function Content({children, customBg = "bg-wk-primary"}: {children: React.ReactNode, customBg?: string}) {
  return (
    <div className={`w-full min-w-60 flex-1 rounded-md flex flex-col px-6 py-5 ${customBg} justify-center items-center text-center`}>
        {children}
    </div>
  )
}
    