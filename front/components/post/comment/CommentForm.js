import { Button, Form, Input } from 'antd';

import React, { useCallback } from 'react';
import useInput from '../../../hooks/useInput';
import { useSelector } from 'react-redux';
import Proptypes from 'prop-types';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = useInput();
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
    setCommentText('');
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
          type="primary"
          htmlType="submit"
        >
          {' '}
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: Proptypes.object.isRequired,
};

export default CommentForm;
