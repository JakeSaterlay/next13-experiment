import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Movie({ title, id, poster_path, release_date }) {
  const [test, setTest] = useState(0);
  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <button onClick={() => console.log("HELLO")}>CLICK</button>
      <Link href={`/asd`}>
        <Image
          src={imagePath + poster_path}
          width={400}
          height={400}
          alt={title}
        />
      </Link>
    </div>
  );
}
