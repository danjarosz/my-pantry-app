import Image from 'next/image';
import styles from './page.module.css';
import { useEffect } from 'react';

export default function Home() {
  let title = 'My Pantry App';
  useEffect(() => {
    console.log('Home page mounted', title);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Welcome to My Pantry App</h1>
      <p>A clever pantry management app</p>
      <p>Powered</p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By <Image src="/vercel.svg" alt="Vercel Logo" className={styles['vercel-logo']} width={100} height={24} priority />
        </a>
      </div>

      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
    </main>
  );
}
