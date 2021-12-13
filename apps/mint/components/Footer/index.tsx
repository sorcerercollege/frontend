import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bottom-0 mx-4 md:mx-16 lg:mx-32 p-16">
      <div className="flex flex-row items-center">
        <Image
          src="/img/logo.png"
          width="50px"
          height="50px"
          alt="Sorcerer College"
        />
        <span className="text-white text-xl ml-4">Sorcerer College</span>
      </div>
    </div>
  );
};
