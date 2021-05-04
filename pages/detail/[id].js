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


s

*/

const Post = ({ item, name }) => {
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

  const router = useRouter();
  //console.log(router.isFallback); //처음 페이지 진입시 true , 로드 완료되면 false

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
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

/*
fallback 을 true 로 변경하면
getStaticPaths 로 전달된 경로들은 build 타임에 만들어지는것은 변함이 없다.
나머지들은 최초 접속시에 props가 빈 상태로 그려지고 이후에
background에서 정적 파일 html 과 json 을 생성해준다. 
그 후 nextJs 는 pre-rendering 목록에 추가합니다.
두번째 접속부터는 정적 생성된 페이지를 사용한다. 

fallback true 는 페이지가  많을 경우 유용하지만, 모든 제품을 
pre-rendering 하면 빌드 타임 에러가 난다. 
최초로 접속한 유저들은 빈 화면을 잠시 보겠지만
이후 접속한 유저들은 정적파일로 빠르게 제공가능하다. 



*/
export async function getStaticPaths() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    // paths: [
    //   { params: { id: "740" } },
    //   { params: { id: "730" } },
    //   { params: { id: "729" } },
    // ],
    paths: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toString(),
      },
    })),
    fallback: true,
  };
}

/*@@ getServersideProps (Server-side rendering) */
export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      item: data,
      name: process.env.name,
    }, // will be passed to the page component as props.
  };
}

/*
Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)
1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)
차이점은 언제 html 파일을 생성하는가
[정적 생성]
- 프로젝트가 빌드하는 시점에 html파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths
[서버사이드 렌더링]은 매 요청마다 html 을 생성
- 항상 최신 상태 유지
- getServerSideProps
 */
