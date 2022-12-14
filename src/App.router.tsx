import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("./pages/Main"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

AppRouter.displayName = "AppRouter";
AppRouter.defaultProps = {};

export default AppRouter;
