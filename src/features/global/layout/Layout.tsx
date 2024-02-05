import RouterDom from "../router/RouterDOM";
import { BoxStyled } from "../styles/components/BoxStyled";
// import { GlobalStyles } from "../styles/components/Global";
// import Footer from "./footer/Footer";
// import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <Header /> */}
      <BoxStyled data-testid="box-element">
        <RouterDom />
      </BoxStyled>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
