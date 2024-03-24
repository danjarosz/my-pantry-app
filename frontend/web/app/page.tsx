import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image src={'/logo.svg'} width={100} height={100} alt={'Application logo'} />
      <h1>Welcome to My Pantry App</h1>
      <p>A clever pantry management app</p>
    </main>
  );
}
