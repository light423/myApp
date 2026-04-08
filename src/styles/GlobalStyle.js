import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* 1. CSS Reset (브라우저 기본 여백 제거) */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. 기본 폰트 및 배경 설정 */
  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f5f5f5; /* 전체 배경색 */
    color: #333;               /* 기본 글자색 */
    -webkit-font-smoothing: antialiased;
  }

  /* 3. HTML 요소 초기화 */
  ul, ol { list-style: none; }
  a { text-decoration: none; color: inherit; }
  button { 
    border: none; 
    background: none; 
    cursor: pointer; 
    font-family: inherit; 
  }
  input, textarea {
    outline: none;
    font-family: inherit;
  }

  /* 4. 퍼블리셔용 공통 클래스 (필요에 따라 추가) */
  .inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .sr-only { /* 웹접근성용 숨김 텍스트 */
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
  }
`;

export default GlobalStyle;
