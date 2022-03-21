import React, { useCallback, useState } from "react";
import Link from "next/link";
import { Button, Form, Input } from "antd";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form style={{ padding: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onchange={onChangeId} required />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onchange={onChangePassword}
          required
        />
      </div>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
