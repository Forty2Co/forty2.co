export default function HeroDoodles() {
  const stroke = "#A78BFA";
  const strokeLight = "#C4B5FD";

  return (
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Beaker - top left */}
      <svg class="absolute top-[12%] left-[8%] w-16 h-16 md:w-20 md:h-20 opacity-30 rotate-[-12deg]" viewBox="0 0 64 64" fill="none">
        <path d="M22 8h20M24 8v20l-10 28h36L40 28V8" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="30" cy="40" r="2" fill={stroke} opacity="0.5" />
        <circle cx="36" cy="44" r="1.5" fill={stroke} opacity="0.4" />
        <circle cx="32" cy="48" r="1" fill={stroke} opacity="0.3" />
      </svg>

      {/* Bubbles - top right */}
      <svg class="absolute top-[15%] right-[10%] w-14 h-14 md:w-18 md:h-18 opacity-25" viewBox="0 0 64 64" fill="none">
        <circle cx="20" cy="40" r="8" stroke={stroke} stroke-width="1.5" />
        <circle cx="38" cy="28" r="6" stroke={strokeLight} stroke-width="1.5" />
        <circle cx="48" cy="44" r="4" stroke={stroke} stroke-width="1.5" />
        <circle cx="30" cy="18" r="3" stroke={strokeLight} stroke-width="1" />
        <circle cx="50" cy="20" r="2" stroke={stroke} stroke-width="1" />
      </svg>

      {/* Flame - bottom left */}
      <svg class="absolute bottom-[18%] left-[12%] w-12 h-12 md:w-16 md:h-16 opacity-25 rotate-[8deg]" viewBox="0 0 48 48" fill="none">
        <path d="M24 4c0 12-12 16-12 28a12 12 0 0024 0C36 20 24 16 24 4z" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M24 18c0 6-5 8-5 16a5 5 0 0010 0c0-8-5-10-5-16z" stroke={strokeLight} stroke-width="1" stroke-linecap="round" />
      </svg>

      {/* Whisk - bottom right */}
      <svg class="absolute bottom-[20%] right-[8%] w-14 h-14 md:w-18 md:h-18 opacity-25 rotate-[20deg]" viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="4" x2="32" y2="28" stroke={stroke} stroke-width="2" stroke-linecap="round" />
        <path d="M24 28c0 16 4 28 8 28s8-12 8-28" stroke={stroke} stroke-width="1.5" stroke-linecap="round" fill="none" />
        <path d="M27 28c0 14 2.5 24 5 24s5-10 5-24" stroke={strokeLight} stroke-width="1" stroke-linecap="round" fill="none" />
        <path d="M30 28c0 10 1 18 2 18s2-8 2-18" stroke={stroke} stroke-width="0.8" stroke-linecap="round" fill="none" opacity="0.5" />
      </svg>

      {/* Lightbulb - mid left */}
      <svg class="absolute top-[45%] left-[5%] w-10 h-10 md:w-14 md:h-14 opacity-20 rotate-[-6deg]" viewBox="0 0 48 48" fill="none">
        <path d="M24 4a14 14 0 00-8 25.4V36h16v-6.6A14 14 0 0024 4z" stroke={strokeLight} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="18" y1="40" x2="30" y2="40" stroke={strokeLight} stroke-width="1.5" stroke-linecap="round" />
        <line x1="20" y1="44" x2="28" y2="44" stroke={strokeLight} stroke-width="1.5" stroke-linecap="round" />
        <path d="M24 4v-2M10 18H8M40 18h-2M13 9l-1.5-1.5M35 9l1.5-1.5" stroke={strokeLight} stroke-width="1" stroke-linecap="round" />
      </svg>

      {/* Test tube - mid right */}
      <svg class="absolute top-[40%] right-[5%] w-10 h-10 md:w-14 md:h-14 opacity-20 rotate-[15deg]" viewBox="0 0 48 48" fill="none">
        <path d="M18 4h12M20 4v28a4 4 0 004 4h0a4 4 0 004-4V4" stroke={stroke} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="20" y1="20" x2="28" y2="20" stroke={strokeLight} stroke-width="1" stroke-linecap="round" />
        <circle cx="23" cy="28" r="1.5" fill={stroke} opacity="0.4" />
        <circle cx="26" cy="25" r="1" fill={strokeLight} opacity="0.3" />
      </svg>
    </div>
  );
}
