import Head from "next/head";
import Link from "next/link";




export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
        <h3>The Awesome pages app</h3>
        <br/>
        <div>
          <Link href="/about">About</Link>
        </div>

        <br/>
        <div>
          <a href="/">Back</a>
        </div>
     </main>
    </>
  );
}
