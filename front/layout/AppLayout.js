import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Menu, Input, Row, Col } from "antd";

import UserProfile from "../components/login/UserProfile";
import LoginForm from "../components/login/LoginForm";

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="Home">
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Profile">
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="Search">
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item key="Signup">
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    오른쪽 메뉴
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
