import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import StageSelectHeader from "../components/StageSelectHeader";

const Home: NextPage = () => {
  const piNumber =
    "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  const panelNumber: string = piNumber.slice(0, 10);
  const tileNumbers = [];
  for (let i = 0; i < 10; i += 2) {
    tileNumbers.push(panelNumber.slice(i, i + 2));
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <StageSelectHeader />
        <ul className="flex">
          <li className="flex py-2.5 mb-5 border-5 bg-stage-1 rounded-md w-80">
            <div className="text-white text-xl mt-7 ml-7">1</div>
            <ul className="flex">
              {tileNumbers.map((tileNumber: string, index: number) => (
                <li key={index}>
                  <Image
                    src={"/wordplays/" + tileNumber + ".png"}
                    width={50}
                    height={50}
                    objectFit="contain"
                    alt="wordplay"
                  />
                  <div className="text-center text-white text-3xl">
                    {tileNumber}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
