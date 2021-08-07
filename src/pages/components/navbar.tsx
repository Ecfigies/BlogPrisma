import { NextPage } from "next";
import { userInfo } from "os";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Navbar = () => {
  const { data, error } = useSWR("/api/users", fetcher);
  if (error) return <div>An error occured.</div>;
  console.log(data);
  if (!data) return <div>Loading ...</div>;

  return (
    <nav className="bg-white shadow-lg">
  	<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="flex space-x-7">
						<div>
						
							<a href="#" className="flex items-center py-4 px-2">
							
								<span className="font-semibold text-gray-500 text-lg">Blog API</span>
							</a>
						</div>
					
						<div className="hidden md:flex items-center space-x-1">
							<a href="" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About it</a>
						</div>
					</div>
				
					<div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
					</div>
				
				</div>
			</div>
 
		
			<div className="hidden mobile-menu">
				<ul className="">
				<a href="" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
							<a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About it</a>
				</ul>
			</div>
		
    </nav>
  );
};

export default Navbar;
