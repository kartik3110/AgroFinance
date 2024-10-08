export default function Arrow() {
  return (
    <svg
      className="w-8 text-gray-700 transform"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12" />
      <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 " />
    </svg>
  );
}
