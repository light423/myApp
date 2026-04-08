import { Form, Input, Button } from "antd";
import { CustomButton } from "./Components";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.black};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  padding-left: 15px;
`;

const InlineGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px; // ID 입력창과 버튼 비율 조절
  gap: 12px;
  align-items: flex-end; // 레이블 높이 차이 보정
  margin-bottom: 24px;
`;

const DynamicRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-radius: 8px;

  .ant-form-item {
    margin-bottom: 0;
    flex: 1;
  }
`;

const MyForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("success", values);
  };
  return (
    <FormWrapper>
      <Title>폼 타이틀</Title>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        <InlineGroup>
          <Form.Item
            label="UserId"
            name="UserId"
            rules={[{ required: true, message: "아이디를 입력해주세요!" }]}
          >
            <Input placeholder="아이디를 입력해주세요" />
          </Form.Item>
          <Form.Item label="">
            <Button type="primary" htmlType="submit">
              제출
            </Button>
          </Form.Item>
        </InlineGroup>
        <hr className="form-divider" />
        <Form.List name="user">
          {/*전체 폼 데이터에서 이 리스트가 저장될 키값*/}
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <DynamicRow key={key} className="dymic-row">
                  <Form.Item
                    {...restField}
                    name={[name, "userName"]}
                    rules={[{ required: true, message: "이름을 입력하세요" }]}
                  >
                    <Input placeholder="사용자 이름" />
                  </Form.Item>
                  <CustomButton
                    $varient="primary"
                    onClick={() => remove(name)}
                    suffix={<MinusOutlined />}
                  >
                    삭제
                  </CustomButton>
                </DynamicRow>
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
      </Form>
    </FormWrapper>
  );
};

export default MyForm;
