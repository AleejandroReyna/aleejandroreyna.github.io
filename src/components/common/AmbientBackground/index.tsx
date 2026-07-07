import "./AmbientBackground.styles.css";

export const AmbientBackground = () => {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-bg__blob ambient-bg__blob--1" />
      <div className="ambient-bg__blob ambient-bg__blob--2" />
      <div className="ambient-bg__blob ambient-bg__blob--3" />
    </div>
  );
};
