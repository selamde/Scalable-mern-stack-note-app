import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header";
import UpdatePage from "./pages/UpdatePage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/create"} element={<CreateNotePage />} />
        <Route path={"/note/update/:id"} element={<UpdatePage />} />
        <Route path={"/note/:id"} element={<DetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
