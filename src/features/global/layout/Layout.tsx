import { BoxStyled } from "../styles/components/BoxStyled";
import { GlobalStyles } from "../styles/components/Global";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import MainPage from "./main/Main";

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      {/* <Header /> */}
      <BoxStyled>
        <MainPage />
      </BoxStyled>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
