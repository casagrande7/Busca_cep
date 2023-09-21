import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import BuscaCep from "../components/BuscaCepForm";

const AppRouter = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="buscacep" element= {<BuscaCep />} />
           </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;