import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const AnimationIntro = lazy(() => import("../components/anim/AnimationIntro"));
const LayoutAuth = lazy(() => import("../components/auth/LayoutAuth"));
const LayoutDasboard = lazy(() =>
  import("../components/app/LayoutDashboard")
);

export const routes = {
  ANIM: "/",
  AUTH: "/authentication",
  DASHBOARD: "/home",
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.ANIM} element={<AnimationIntro />} />
        <Route path={routes.AUTH} element={<LayoutAuth />} />
        <Route path={routes.DASHBOARD} element={<LayoutDasboard />} />
      </Routes>
    </>
  );
};

export default BaseRoutes;
