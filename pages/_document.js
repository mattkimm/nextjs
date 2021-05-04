import Document, { Html, Head, Main, NextScript } from "next/document";

// next 에서 만들어주는 document를 customizing 할 수 있음 .
// next js page들은 markup 정의를 건너뛰기 때문에 html 이나 head body등의 태그를 만들때는 이 파일을 필수 적으로 사용해야한다.

// _app 과 _document 역할의 차이
/*
_app은 global css 적용하거나, layout 을 잡을 수 있다.
반면에 document 는 서버에서만 렌더링되고 onclick 같은 eventHandler 같은 부분은 작동하지 않음.

_document에서 사용하는 head랑 _app 의 head는 다르다.
title 같은 속성을 넣을 때 app 에서 넣거나 각 페이지에서 head를 import 해서 사용해야한다. 
*/

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
