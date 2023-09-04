import "./App.css";
import Header from "./layout/component/Header";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routers/routes";
import { Suspense } from "react";
import Loading from "./layout/component/Loading";
// import About from "./components/about/About";
// import CourseHome from "./components/allcourses/CourseHome";
// import Team from "./components/team/Team";
// import Pricing from "./components/pricing/Pricing";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";
// import Home from "./components/home/Home";
// import Footer from "./layout/component/footer/Footer";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes}></RouterProvider>
      </Suspense>
    </>
  );
}

export default App;
