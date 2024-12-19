import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex justify-center mt-16">
      <Image
        className="h-52"
        src="spinner.svg"
        alt="loading"
        width={52}
        height={52}
      />
    </div>
  );
}
