import { Card, Popover, Button, Avatar } from 'antd';
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from '@ant-design/icons';
import React, { useCallback, useState } from 'react';
import Proptypes from 'prop-types';

import PostImages from './PostImages';
import { useSelector } from 'react-redux';

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);

  const id = useSelector((state) => state.user?.id);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              key="heart"
              twoToneColor="#eb2f96"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
          ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpend && <div>댓글 부분</div>}

      {/* <CommentForm /> */}
      {/* <Comments /> */}
    </div>
  );
};

PostCard.propTypes = {
  post: Proptypes.shape({
    id: Proptypes.number,
    User: Proptypes.object,
    content: Proptypes.string,
    createAt: Proptypes.object,
    Comment: Proptypes.arrayOf(Proptypes.object),
    Images: Proptypes.arrayOf(Proptypes.object),
  }).isRequired,
};

export default PostCard;
