import React from "react";
import { Form, Input, Button, Space, Flex } from "antd";
import { CustomButton } from "./Components";
import { PlusOutlined } from "@ant-design/icons";
const MyForm = () => {
  const onFinish = (values) => {
    console.log("success", values);
  };
  return (
    <Form onFinish={onFinish}>
      <Space direction="vertical">
        <Space>
          <Form.Item
            label="UserId"
            name="UserId"
            rules={[{ required: true, message: "아이디를 입력해주세요!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="sumit">
              제출
            </Button>
          </Form.Item>
        </Space>
        <Space>
          <Form.List name="user">
            {/*전체 폼 데이터에서 이 리스트가 저장될 키값*/}
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Flex key={key} gap={"4px"}>
                    <Form.Item>
                      <Input placeholder="이름" />
                    </Form.Item>
                    <Button type="primary" onClick={() => remove(name)}>
                      삭제
                    </Button>
                  </Flex>
                ))}
                <Form.Item>
                  <CustomButton
                    $varient="primary"
                    onClick={() => add()}
                    suffix={<PlusOutlined />}
                  >
                    사용자추가
                  </CustomButton>
                </Form.Item>
              </>
            )}
            {/* 현재 생성된 입력 필드들의 정보(고유 key,인덱스등)이 담긴 배열임 */}
          </Form.List>
        </Space>
      </Space>
    </Form>
  );
};

export default MyForm;
