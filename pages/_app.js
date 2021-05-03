import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

/*
Props Component : 현재 페이지 , 페이지 전환시 컴포넌트 prop변경됨
pageProps : 데이터 fetching method를 통해 미리 가져온 초기 객체
method 사용하지 않는다면 빈 객체 전달됨 
*/

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

export default MyApp;
