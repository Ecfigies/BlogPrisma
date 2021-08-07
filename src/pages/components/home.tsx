import { NextPage } from "next";
import { userInfo } from "os";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("/api/users", fetcher);
  if (error) return <div>An error occured.</div>;
  console.log(data);
  if (!data) return <div>Loading ...</div>;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Blog
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
           Simple Blog with NextJS, Prisma and React 
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           First you need to create an railway project to work, next just need to setup the link to the project and all done, create an account and test it
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
