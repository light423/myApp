import React from "react";
import { Modal, Form, Input } from "antd";
const ModalForm = ({ open, onCancle, onSubmit }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      onCancle={onCancle}
      onOk={() => {
        form.submit();
      }}
    >
      <Form form={form} onFinish={onSubmit}>
        <Form.Item name="name" label="이름">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="나이">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
