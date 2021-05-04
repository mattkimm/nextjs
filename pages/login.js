import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Form, Button } from "semantic-ui-react";

function login() {
  const router = useRouter();

  function login() {
    axios.post("/api/login").then((res) => {
      if (res.status === 200) {
        router.push("/admin");
      }
    });
  }

  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default login;
