import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const CreateUser = lazy(() => import("../pages/CreateUser"));
const EditUser = lazy(() => import("../pages/EditUser"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;