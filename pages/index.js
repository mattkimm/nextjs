import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";

// _app 에서  meta 태그나 title 속성같은걸 정의할 떄는 next/head를 불러와서 사용해야한다.
export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();

    return () => {};
  }, []);

  return (
    <>
      <Head>
        <title>HOME | 코딩 </title>
      </Head>
      <ItemList list={list} />
    </>
  );
}
