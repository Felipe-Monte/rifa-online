import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { DetailsQuota } from "../pages/details-quota";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<DetailsQuota />} />
    </Routes>
  );
}
