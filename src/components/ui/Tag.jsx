const COLOR_MAP = {
  rose: 'bg-rose-light text-rose-dark dark:bg-[#3D1E28] dark:text-[#F0A8B8]',
  sage: 'bg-sage-light text-sage-dark dark:bg-[#1A2E1A] dark:text-[#A8D4A0]',
  lavender: 'bg-lavender-light text-lavender-dark dark:bg-[#1E1A35] dark:text-[#C4B8F0]',
  peach: 'bg-peach-light text-peach-dark dark:bg-[#2E1E10] dark:text-[#E8B48A]',
}

export default function Tag({ label, color = 'rose', className = '' }) {
  return (
    <span
      className={`
        inline-block text-xs px-2.5 py-1 rounded-lg font-normal
        ${COLOR_MAP[color] ?? COLOR_MAP.rose}
        ${className}
      `}
    >
      {label}
    </span>
  )
}
