import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

export default function AppLayout({children}: any){
  return(
    <>
      <Head>
        <title>MaxiShop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}