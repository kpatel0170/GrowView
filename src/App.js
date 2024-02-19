import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Currency from "./pages/Currency";

import { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";

import { Provider } from "react-redux";
import store from "./store/store.js";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Protected from "./components/AuthLayout.jsx";
import Signup from "./pages/Signup.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";

function Layout() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  ) : null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: "/all-posts",
        element: (
          <Protected authentication>
            <AllPosts />
          </Protected>
        )
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication>
            <AddPost />
          </Protected>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            <EditPost />
          </Protected>
        )
      },
      {
        path: "/post/:slug",
        element: (
          <Protected authentication>
            <Post />
          </Protected>
        )
      }
    ]
  }
]);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};

export default App;
