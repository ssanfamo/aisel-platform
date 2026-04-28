export default function Section({ children, className = "" }) {
  return (
    <section className={`py-28 md:py-32 ${className}`}>
      {children}
    </section>
  );
}