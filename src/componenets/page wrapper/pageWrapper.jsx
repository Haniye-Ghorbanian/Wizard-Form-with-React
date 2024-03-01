export default function PageWrapper({ children }) {
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-50 font-custom">
            {children}
        </div>
    )
}