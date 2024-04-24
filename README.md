# 기업과제2. 환율 변환 서비스 개발

> 사용자가 입력한 수치와 통화에 따라, 각 탭에 환율 변환 정보를 표시


## 🚩 목차
- [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)
- [🎥 데모](#-데모)
- [⚙️ 주요 기능](#%EF%B8%8F-주요-기능)
- [🪝 사용한 리액트 훅](#-사용한-리액트-훅)
- [🎨 UI](#-ui)
- [📂 프로젝트 구조](#-프로젝트-구조)
- [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS3-%231572B6?style=flat-square&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=flat-square&logo=html5&logoColor=white)
- [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://reactjs.org) [![CRA](https://img.shields.io/badge/Create%20React%20App-09D3AC?style=flat-square&logo=createreactapp&logoColor=white)](https://create-react-app.dev/) [![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main) [![Redux](https://img.shields.io/badge/Redux-%23764ABC?style=flat-square&logo=redux&logoColor=white
)](https://react-redux.js.org/) [![React Query](https://img.shields.io/badge/React%20Query-%23FF4154?style=flat-square&logo=reactquery&logoColor=white)](https://tanstack.com/query/v4/docs/framework/react/overview)
- [![styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)


## 🎥 데모
![Demo](https://github.com/NarciSource/Pre-Onboarding-FE--corp-task-02/assets/26417221/f82f9bfb-57b9-49c9-8b70-4731770a8eaa)


## ⚙️ 주요 기능

- 사용자가 입력한 수치와 통화에 따라, 각 탭에 환율 변환 정보를 표시
- 입력칸에는 숫자만 입력 가능
- 1000 이상 입력 시 환율 변환
- 입력칸 숫자에 천단위 구분자 추가
- 드롭 다운 메뉴에 USD,CAD,KRW, HKD,JPY,CNY 통화 제시
- 드롭 다운 선택된 통화는 탭에서 빠짐
- 사용자의 수치 입력 혹은 드롭다운 메뉴를 이용한 통화 변경시 변경될 환율과 기준일 정보는 동기화 되어 변경
- 날짜 포맷은 2022-Jan-01
- 상태 관리 Redux 사용

## 🪝 사용한 리액트 훅

- React hooks - useState, useEffect
- React Redux hooks - useSelector, useDispatch
- React Query hooks - useQuery

## 🎨 UI
![UI](https://github.com/NarciSource/Pre-Onboarding-FE--corp-task-02/assets/26417221/14b38d2c-34be-4d98-ba20-5b713df2f780)

## 📂 프로젝트 구조
```
corp-task--02
├─ .git
├─ .gitignore
├─ .env.local
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ App.css
   ├─ App.jsx
   ├─ App.test.js
   ├─ components
   │  ├─ ExchangeTabComp.jsx
   │  └─ MoneyInputComp.jsx
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ network
   │  └─ callExchange.js
   ├─ redux
   │  ├─ slices
   │  │  └─ wallet.js
   │  └─ store.js
   ├─ reportWebVitals.js
   └─ setupTests.js

```

## 🚀 실행 방법

### 추가 정보

.env 파일로 APILAYER_APIKEY에 [API KEY](https://apilayer.com/marketplace/exchangerates_data-api)로 호출 횟수(월 100회)로 설정

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

