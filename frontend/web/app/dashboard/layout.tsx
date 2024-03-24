export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 20
      }}
    >
      {children}
    </div>
  );
}
