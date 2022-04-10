import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import { Button, Form, Input } from "antd";

import { LogInAction } from "../../reducers";

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DivWrapper = styled.div`
    margin-bottom: 10px;
`;

const StyledForm = styled(Form)`
    padding: 20px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState("rkrkdldkd");
    const [password, setPassword] = useState("1234");

    const onChangeId = useCallback(
        (e) => {
            setId(e.target.value);
        },
        [id]
    );

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback((e) => {
        console.log(id, password);
        dispatch(LogInAction({ id }));
    }, []);

    return (
        <StyledForm onFinish={onSubmitForm}>
            <DivWrapper>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input
                    name="user-id"
                    value={id}
                    onChange={onChangeId}
                    required
                />
            </DivWrapper>
            <DivWrapper>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    type={"password"}
                    name="user-password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </DivWrapper>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </StyledForm>
    );
};

export default LoginForm;
