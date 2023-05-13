import React from "react";
import { Home, Product, Error } from "./pages";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components";

const LazyCart = React.lazy(() => import("./pages/Cart"));
const LazyEarbuds = React.lazy(() => import("./pages/Earbuds"));
const LazyHeadphones = React.lazy(() => import("./pages/Headphones"));
const LazyTrending = React.lazy(() => import("./pages/Trending"));
const LazyNeckbands = React.lazy(() => import("./pages/Neckbands"));
const LazyBest = React.lazy(() => import("./pages/Best"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route
        path="/cart"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyCart />
          </React.Suspense>
        }
      />
      <Route
        path="/earbuds"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyEarbuds />
          </React.Suspense>
        }
      />
      <Route
        path="/headphones"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyHeadphones />
          </React.Suspense>
        }
      />
      <Route
        path="/trending"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyTrending />
          </React.Suspense>
        }
      />
      <Route
        path="/neckbands"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyNeckbands />
          </React.Suspense>
        }
      />
      <Route
        path="/best"
        element={
          <React.Suspense fallback={<Loading />}>
            <LazyBest />
          </React.Suspense>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
