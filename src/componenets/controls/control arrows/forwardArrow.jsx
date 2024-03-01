export default function ForwardArrow() {
  return (
    <div className="relative group">
      <svg
        className="w-6 h-6 text-gray-400 dark:text-white transition-all duration-500 ease-back-forward hover:translate-x-1 hover:text-blue-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 12H5m14 0-4 4m4-4-4-4"
        />
      </svg>

      <span className="absolute left-3 bg-slate-50 border border-solid border-blue-300 rounded-md w-14 h-8 opacity-0 transition-all delay-300 duration-300  group-hover:opacity-100 flex items-center justify-center text-gray-500 font-thin text-xs">
        مرحله قبل
      </span>
    </div>
  );
}
