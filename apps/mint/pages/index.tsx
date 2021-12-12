import { useState } from "react";
import Image from "next/image";

export default function Home(): JSX.Element {
  const spell_books = {
    1: "/img/spellbooks/arcane.gif",
    2: "/img/spellbooks/fire.gif",
    3: "/img/spellbooks/death.gif",
  };

  const [image, setImage] = useState(1);

  return (
    <div className="w-full">
      <div>
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
