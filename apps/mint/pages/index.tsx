import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(): JSX.Element {
  const spell_books = {
    1: "/img/spellbooks/arcane.gif",
    2: "/img/spellbooks/fire.gif",
    3: "/img/spellbooks/death.gif",
  };

  const [image, setImage] = useState(1);

  return (
    <div className="w-full">
      <div className="flex flex-row w-3/4 mx-auto mt-24 justify-between">
        <div>
          <div className="text-pink uppercase font-bold text-6xl">
            <h1>Not an ordinary</h1>
            <h1>NFT.</h1>
            <h1>Revealing in</h1>
            <h1>24 hours</h1>
          </div>
          <div className="text-white text-lg mt-5">
            <p>Pick your</p>
            <p>Sorcerer College Textbook.</p>
            <p>1 Mint per person.</p>
          </div>
        </div>
        <div className="text-white font-bold">
          <div className="flex flex-row items-center h-12">
            <div className="mx-2">
              <Link href="https://twitter.com/sorcerercollege" passHref>
                <Image
                  className="cursor-pointer"
                  src={"/img/twitter.png"}
                  width="36px"
                  height="29px"
                />
              </Link>
            </div>
            <div className="mx-2">
              <Link href="https://discord.gg/JxXHYbqgVW" passHref>
                <Image
                  className="cursor-pointer"
                  src={"/img/discord.png"}
                  width="36px"
                  height="27px"
                />
              </Link>
            </div>
          </div>
          <div className="h-6">
            <span>Countdown: </span>
          </div>
          <div className="text-8xl text-center font-bold">
            <p>23</p>
            <p>59</p>
          </div>
          <div className="mt-4 text-center">
            <span>Launching in 24 hours after minting ends.</span>
          </div>
        </div>
      </div>
      <div className="-mt-96">
        <div className="flex flex-row justify-center mx-auto items-center w-5/6 mt-24">
          <button
            className="arrow-left"
            onClick={() => setImage(image > 1 ? image - 1 : 1)}
          />
          <div className="text-center">
            <Image src={spell_books[image]} width="350px" height="350px" />
          </div>
          <button
            className="arrow-right"
            onClick={() => setImage(image < 3 ? image + 1 : 3)}
          />
        </div>
        <div className="flex flex-row justify-center mx-auto items-center w-5/6 mt-6 uppercase">
          <button>
            <div className="text-white border-white border-2 py-1 px-4 bg-light-purple text-lg">
              <span>MINT</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
