export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#f5f5f5", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}