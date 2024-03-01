export default function BackwardArrow() {
  return (
    <div className="relative group">
      <svg
        className="w-6 h-6 text-gray-400 dark:text-white transition-all duration-500 ease-back-forward hover:-translate-x-1 hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>

      <span className="absolute right-3 bg-slate-50 border border-solid border-blue-300 rounded-md w-14 h-8 opacity-0 transition-all delay-300 duration-300  md:group-hover:opacity-100 flex items-center justify-center text-gray-500 font-thin text-xs">مرحله بعد</span>
    </div>
  );
}
