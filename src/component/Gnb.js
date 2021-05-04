import { useRouter } from "next/router";
import React from "react";
import { Menu } from "semantic-ui-react";

/*
a tag 나 location을 이동을 시키면 페이지가 새로고침되면서 이동한다.
nextlink를 이용하면 page 가 그대로 있는상태에서 안에 내용물만 변경된다.


@ 자주사용하는 Error page를 서버에서 rendering 한다면 그 만큼 비용이 
증가되고 느리다는 느낌을 받을 수 있다. next 에서 error file 을 static 파일로 제공한다. 

*/
function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    }
  }

  return (
    <Menu>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink}>
        Home
      </Menu.Item>

      <Menu.Item name="about" active={activeItem === "about"} onClick={goLink}>
        About
      </Menu.Item>
      <Menu.Item
        name="Contact Us"
        active={activeItem === "contact"}
        onClick={() => {
          router.push("/contact");
        }}
      >
        Contact Us
      </Menu.Item>
    </Menu>
  );
}

export default Gnb;
