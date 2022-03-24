import React from "react";
import Head from "next/head";

import AppLayout from "../layout/AppLayout";
import NicknameEditForm from "../components/profile/NicknameEditForm";
import FollowList from "../components/profile/FollowList";

const Profile = () => {
  const followingList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "노드버드오피셜" },
  ];
  const followerList = [
    { nickname: "제로초" },
    { nickname: "바보" },
    { nickname: "노드버드오피셜" },
  ];
  return (
    <>
      <AppLayout>
        <Head>
          <title>내 프로필 | NodeBird</title>
        </Head>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
