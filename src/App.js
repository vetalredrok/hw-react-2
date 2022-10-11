import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {CarsPage, LoginPage, RegisterPage} from "./pages";


function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'/register'}/>}/>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/register'} element={<RegisterPage/>}/>
          <Route path={'/cars'} element={<CarsPage/>}/>
      </Route>

    </Routes>
  );
}

export default App;
