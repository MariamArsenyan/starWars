import { HomeComponent } from '../components/HomeComponent';
import { Navbar } from '../components/common/Navbar';

export const Home = () => {
  return (
    <div className="body flex flex-col items-center min-h-screen bg-black text-white">
      <Navbar />
      <div className="relative w-[90%] h-[600px] rounded shadow-md hover:bg-[#fade4b] transition-all bg-gray-700 p-2">
        <img
          src={`https://lumiere-a.akamaihd.net/v1/images/best-of-2024-hero-desktop_5e0063b7.jpeg?region=0,0,1600,686`}
          alt="img"
          className="w-full h-full object-fill rounded"
        />
        <div className="absolute bottom-40 left-[7%] p-6 w-[30%] h-[50%] flex flex-col justify-center bg-opacity-0">
          <h1 className="text-3xl font-bold mb-7">Star Wars Year in Review 2024</h1>
          <p className="text-lg mb-9">
            StarWars.com celebrates the year’s biggest announcements, most-anticipated releases, and
            favorite moments
          </p>
          <button className="w-1/2 relative left-[20%] rounded-full px-4 py-2 text-lg font-medium text-black bg-[#fade4b]  hover:bg-[#e5ce45] transition-all">
            Read More
          </button>
        </div>
      </div>
      <HomeComponent />
    </div>
  );
};
