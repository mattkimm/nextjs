import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// _app 에서  meta 태그나 title 속성같은걸 정의할 떄는 next/head를 불러와서 사용해야한다.
export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | 코딩 </title>
      </Head>
    </div>
  );
}
