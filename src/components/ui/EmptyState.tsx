interface Props {
  filtered?: boolean;
}

export function EmptyState({ filtered = false }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-16 pb-8 px-6">
      {/* Illustration */}
      <svg
        width="242"
        height="200"
        viewBox="0 0 242 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="mb-10 max-w-[160px] md:max-w-[242px]"
      >
        <ellipse cx="121" cy="190" rx="121" ry="10" fill="url(#shadow)" />
        <rect
          x="56"
          y="40"
          width="130"
          height="160"
          rx="8"
          fill="#F9FAFE"
          className="dark:fill-[#252945]"
        />
        <rect
          x="44"
          y="30"
          width="130"
          height="160"
          rx="8"
          fill="#DFE3FA"
          className="dark:fill-[#1E2139]"
        />
        <rect
          x="32"
          y="20"
          width="130"
          height="160"
          rx="8"
          fill="#7C5DFA"
          opacity="0.15"
        />
        {/* Face */}
        <circle cx="99" cy="90" r="8" fill="#7C5DFA" opacity="0.5" />
        <circle cx="131" cy="90" r="8" fill="#7C5DFA" opacity="0.5" />
        {/* Sad mouth */}
        <path
          d="M 99 115 Q 115 105 131 115"
          stroke="#7C5DFA"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <defs>
          <radialGradient id="shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7C5DFA" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7C5DFA" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <h2 className="text-heading-m text-col-text dark:text-col-dark-text mb-5">
        Nothing here
      </h2>

      <p className="text-body text-col-label dark:text-col-dark-label max-w-[200px] leading-relaxed">
        {filtered
          ? "No invoices match the selected filter. Try a different status."
          : "Create an invoice by clicking the\u00a0New\u00a0Invoice button."}
      </p>
    </div>
  );
}
