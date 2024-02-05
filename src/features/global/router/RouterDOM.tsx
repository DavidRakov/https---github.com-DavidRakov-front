import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./models/routes";
import MainPage from "../layout/main/Main";
import Form from "../../newDonation/pages/NewDonation";

const RouterDom = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME_PAGE} element={<MainPage />} />
      <Route path={ROUTES.RUNWAY} element={<Form />} />
    </Routes>
  );
};
export default RouterDom;
