



export default function Content({ children, customBg = "bg-wk-primary", flex = 1 }: { children: React.ReactNode, customBg?: string, flex?: number }) {
  return (
    <div style={ {
      flex: flex, minWidth: '15rem'
    } } className={ `w-full min-w-60 rounded-md flex flex-col px-6 py-5 ${customBg} justify-center items-center text-center` }>
      { children }
    </div>
  )
}
