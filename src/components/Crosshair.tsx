export default function Crosshair() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[var(--z-cursor)] pointer-events-none"
    >
      <line x1="14.75" y1="0" x2="14.75" y2="30" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" />
      <line y1="14.25" x2="30" y2="14.25" stroke="rgba(0,0,0,0.32)" strokeWidth="1.5" />
    </svg>
  );
}
