



export default function Content({ children, customBg = "bg-wk-primary", flex = 1, buttonIcon, buttonTitle, buttonAction }: { children: React.ReactNode, customBg?: string, flex?: number, buttonIcon?: string, buttonTitle?: string, buttonAction?: () => void }) {
  return (
    <div style={ {
      flex: flex, minWidth: '15rem'
    } } className={ `w-full min-w-60 rounded-md flex flex-col px-6 py-5 ${customBg} justify-center items-center text-center relative` }>
      { buttonIcon && buttonAction && (
        <button title={ buttonTitle } type="button" className="absolute max-w-fit max-h-fit top-3 right-4 opacity-50 bg-transparent hover:opacity-100 cursor-pointer" onClick={ buttonAction }>
          <i className={ "fa-light " + buttonIcon }></i>
        </button>
      ) }

      { children }
    </div>
  )
}
