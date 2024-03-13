import { Header } from '@/lib/ui/Header/Header';

export default function Dashboard() {
  return (
    <main>
      <Header user={{ name: 'Jane Doe' }} />
      <h1>Dashboard</h1>
    </main>
  );
}
