import React, { Suspense, lazy } from "react";
import Loader from "react-loader-spinner";
import styled, { createGlobalStyle } from "styled-components";
import useModal from "./Components/useModal";
// Here is the "Regular" way we import our components
import Today from "./Components/Today";
import Tomorrow from "./Components/Tomorrow";

// Use the imports below to quickly implement code splitting/lazy loading
// const Today = lazy(() => import("./Componnents/Today"))
// const Tomorrow = lazy(() => import("./Componnents/Tomorrow"))

// To "eagerly" load our assets upon initial page load, we can import the
// promises directly, and call React.lazy on the promise
// const TodayPromise = import("./Components/Today");
// const TomorrowPromise = import("./Components/Tomorrow");
// const Today = lazy(() => TodayPromise);
// const Tomorrow = lazy(() => TomorrowPromise);

const App = props => {
  const [TodayModal, openTodayModal] = useModal();

  const [TomorrowModal, openTomorrowModal] = useModal();

  console.log(import("./Components/Today"));

  return (
    <Inner>
      <GlobalStyle />
      <h1 className="title">WHAT</h1>
      <h1 className="title">DAY</h1>
      <h1 className="title">IS</h1>
      <h1 className="title">TODAY?</h1>
      <ButtonContainer>
        <Button onClick={openTodayModal}>
          <p>Find Out!</p>
        </Button>
        <Button onClick={openTomorrowModal}>
          <p>Tomorrow?</p>
        </Button>
      </ButtonContainer>
      <TodayModal>
        <Suspense fallback={<Loader />}>
          <Today />
        </Suspense>
      </TodayModal>
      <TomorrowModal>
        <Suspense fallback={<Loader />}>
          <Tomorrow />
        </Suspense>
      </TomorrowModal>
    </Inner>
  );
};

export default App;

//------------------- Styles ------------------------//

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    padding-top: 4rem;
    background-color: #393939;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media(max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-family: "Raleway";
    font-weight: 100;
    font-size: 20rem;
    margin 1rem;
    line-height: .7;
    color: #ededed;
    @media(max-width: 1200px) {
      font-size: 20vw;
    }
  }
`;

const Button = styled.button`
  background-color: inherit;
  border: 2px solid #ededed;
  color: #ededed;
  border-radius: 5px;
  font-size: 3rem;
  min-width: 300px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    font-size: 1.5rem;
    min-width: 150px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
`;
