import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import NotFoundSVG from "../components/404";

const NotFoundPage = () => {
  return (
    <Layout >
      <div className="bg-space-indigo flex flex-col items-center">
        <NotFoundSVG />
        <Link to='/'>
          <button className="rounded-md bg-purple-800 hover:bg-purple-600 transition ease-in-out duration-500 p-2">Return Home</button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
