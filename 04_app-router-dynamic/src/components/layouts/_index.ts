/*
  ## 배럴 패턴 (Barrel Pattern) ##
  1. 여러 컴포넌트, 함수 클래스 등의 모듈을 하나의 파일에 모아서 재정의
  2. 여러 모듈을 한 곳에서  import할 수 있음. 각 모듈을 따로 정의하더라도,
  intex.ts 파일만 import함으로써 코드의 가독성이 높아짐
*/

// 방법 1
// import Header from './Header';
// import Navigator from './Navigator';
// import Footer from './Footer';

// export { Header, Navigator, Footer };

export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Navigator } from './Navigator';
