import Head from "next/head";
import AvatarGenerator from "../components/AvatarGenerator/AvatarGenerator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arc Avatar</title>
        <meta name="description" content="Arc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="content-bg min-h-screen p-3">
        <AvatarGenerator />
      </main>
    </div>
  );
}
