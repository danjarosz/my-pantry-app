import { Button } from '@/lib/ui/Button/Button';
import { Header } from '@/lib/ui/Header/Header';

export default function Login() {
  return (
    <main>
      <Header user={{ name: 'Jane Doe' }} />
      <h1>Login page</h1>
      <Button label={'Log in'} primary size={'large'} />
    </main>
  );
}
