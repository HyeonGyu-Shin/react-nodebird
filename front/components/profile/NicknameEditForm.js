import { Form, Input } from "antd";
import styled from "styled-components";
import React from "react";

const StyledForm = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  return (
    <StyledForm>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </StyledForm>
  );
};

export default NicknameEditForm;
