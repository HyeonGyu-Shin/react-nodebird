import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Avatar, Card, Button } from "antd";

import { LogOutAction } from "../../reducers";

const UserProfile = () => {
    const dispatch = useDispatch();
    const onLogOut = useCallback((e) => {
        dispatch(LogOutAction());
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />0
                </div>,
                <div key="followings">
                    팔로잉
                    <br />0
                </div>,
                <div key="followers">
                    팔로워
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>ZC</Avatar>} title="ZeroCho" />
            <Button htmlType="button" onClick={onLogOut}>
                로그아웃
            </Button>
        </Card>
    );
};

export default UserProfile;
