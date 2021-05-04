import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";

/* 
dynamic Router : post/1 으로 routing 하려면 next/router useRotuer 함수 사용

reference : https://nextjs.org/docs/routing/dynamic-routes


Client-side navigations to dynamic routes are handles with 'next/link'
*/

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }

    return () => {};
  }, [id]);

  return <Item item={item} />;
};

export default Post;
