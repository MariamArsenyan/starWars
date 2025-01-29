import ep8 from '../../assets/news/ep8.jpeg'; 
import ep7 from '../../assets/news/ep7.jpeg';
import epp from '../../assets/news/epp1.jpeg'
import epp1 from '../../assets/news/epp1.jpeg';

interface News {
  id: number;
  title: string;
  img: string;
}

const news: News[] = [
  {
    id: 1,
    title: 'Skeleton Crew Explained | Episode 8 - “The Real Good Guys”',
    img: ep8,
  },
  {
    id: 2,
    title: 'Skeleton Crew Explained | Episode 7 - “We’re Gonna Be In So Much Trouble”',
    img: ep7,
  },
  {
    id: 3,
    title: 'Matte Paintings and Models: The Visual Effects of Star Wars: Skeleton Crew ',
    img: epp,
  },
  {
    id: 4,
    title: 'Celebrity Guests Confirmed for Star Wars Celebration Japan 2025 - Updated',
    img: epp1,
  },
  {
    id: 5,
    title: 'Skeleton Crew Explained | Episode 8 - “The Real Good Guys”',
    img: ep8,
  },
  {
    id: 6,
    title: 'Skeleton Crew Explained | Episode 7 - “We’re Gonna Be In So Much Trouble”',
    img: ep7,
  },
  {
    id: 7,
    title: 'Matte Paintings and Models: The Visual Effects of Star Wars: Skeleton Crew ',
    img: epp,
  },
  {
    id: 8,
    title: 'Celebrity Guests Confirmed for Star Wars Celebration Japan 2025 - Updated',
    img: epp1,
  }
];

export const NewsCard = () => {
  return (
    <>
      <h2 className="text-start text-2xl font-bold flex p-2 border-t border-b border-gray-700 gap-10 mt-4 font-exo-2 pl-24">
        News
      </h2>
      <div className="flex flex-wrap justify-center gap-10 p-4">
      {news.map((item) => (
        <div
          key={item.id}
          className="w-[397px] h-[330px] rounded-lg shadow-lg p-2 bg-gray-700 hover:bg-[#fade4b] "
        >
          <div className="w-full ">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <h2 className="text-lg font-semibold text-center mt-4">{item.title}</h2>
        </div>
      ))}
    </div>
    </> 
  );
}
