import Head from "next/head";
import AvatarGenerator from "../ui/AvatarGenerator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arc</title>
        <meta name="description" content="Arc" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <div className="container mx-auto">
          <AvatarGenerator />
        </div>
      </main>
    </div>
  );
}
