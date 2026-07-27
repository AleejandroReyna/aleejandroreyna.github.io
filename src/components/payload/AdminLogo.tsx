const AdminLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#46d386"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '15px',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--theme-elevation-1000)',
      }}
    >
      Alejandro Reyna
    </span>
  </div>
);

export default AdminLogo;
