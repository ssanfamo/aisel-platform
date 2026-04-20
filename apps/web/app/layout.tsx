export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        
        {/* NAVBAR */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#ffffff"
        }}>
          <strong>AISEL</strong>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/" style={{ textDecoration: "none", color: "#111827" }}>Home</a>
            <a href="#services" style={{ textDecoration: "none", color: "#111827" }}>Services</a>
            <a href="#contact" style={{ textDecoration: "none", color: "#111827" }}>Contact</a>
          </div>
        </nav>

        {children}

        {/* FOOTER */}
        <footer style={{
          marginTop: "60px",
          padding: "30px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
          color: "#6b7280"
        }}>
          © {new Date().getFullYear()} AISEL Technologies. All rights reserved.
        </footer>

      </body>
    </html>
  );
}
