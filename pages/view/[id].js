import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

/* 
@@dynamic Router : post/1 으로 routing 하려면 next/router useRotuer 함수 사용
reference : https://nextjs.org/docs/routing/dynamic-routes
Client-side navigations to dynamic routes are handles with 'next/link'

@@ getServersideProps (Server-side rednering)
getServerSideProps (Server-side Rendering): Fetch data on each request.

If you export an async function called getServerSideProps from a page,
Next.js will pre-render this page on each request using the
data returned by getServerSideProps.

'context' parameter is an object [contains key]

*/

const Post = ({ item }) => {
  //const router = useRouter();
  //const { id } = router.query;

  //const [item, setItem] = useState({});
  //const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // function getData() {
  //   axios.get(API_URL).then((res) => {
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // }

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }

  //   return () => {};
  // }, [id]);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
  //  {isLoading ? (
  //   <div style={{ padding: "300px 0" }}>
  //     <Loader inline="centered" active>
  //       Loading
  //     </Loader>
  //   </div>
  // ) : (
  //   <Item item={item} />
  // )}
};

export default Post;

/*@@ getServersideProps (Server-side rednering) */
export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      item: data,
    }, // will be passed to the page component as props.
  };
}
