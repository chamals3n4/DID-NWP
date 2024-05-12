import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Applicants from "./pages/Applicants";
import AddApplicant from "./pages/AddApplicant";
import NotFoundPage from "./pages/NotFound";
import UpdateApplicant from "./pages/UpdateApplicant";

import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route index element={<HomePage />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="applicants/:id" element={<UserPage />} />
          <Route path="/add-applicant" element={<AddApplicant />} />
          <Route path="/edit-applicant/:id" element={<UpdateApplicant />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
