import ser1 from '../../assets/series/ser1.jpeg';
import ser2 from '../../assets/series/ser2.jpeg';
import ser3 from '../../assets/series/ser3.jpeg';
import ser4 from '../../assets/series/ser4.jpeg';
import ser5 from '../../assets/series/ser5.jpeg';

interface Series {
  id: number;
  title: string;
  img: string;
}

const series: Series[] = [
  {
    id: 1,
    title: 'Star Wars: Skeleton Crew',
    img: ser1,
  },
  {
    id: 2,
    title: 'Star Wars: The Acolyte',
    img: ser2,
  },
  {
    id: 3,
    title: 'Star Wars: Tales of the Empire',
    img: ser3,
  },
  {
    id: 4,
    title: 'Star Wars: The Clone Wars',
    img: ser4,
  },
  {
    id: 5,
    title: 'Star Wars: Obi-Wan Kenobi',
    img: ser5,
  },
  {
    id: 6,
    title: 'Star Wars: Tales of the Empire',
    img: ser3,
  },
  {
    id: 7,
    title: 'Star Wars: Obi-Wan Kenobi',
    img: ser5,
  },
];

export const SeriesCard = () => {
  return (
    <div className="h-full">
      <h2 className="text-start text-2xl font-bold flex p-2 border-t border-b border-gray-700 gap-10 mt-4 font-exo-2 pl-24">
        Series
      </h2>
      <div className="flex flex-wrap justify-center gap-5 pt-4 pb-20">
        {series.map(item =>
          <div
            key={item.id}
            className="w-[226px] h-[339px] rounded-lg shadow-lg  bg-gray-700 hover:bg-[#fade4b] "
          >
            <div className="w-full ">
              <img
                src={item.img}
                alt={item.title}
                className="w-full  object-cover rounded hover:animate-pulse "
              />
            </div>
            <h2 className="text-lg font-semibold text-center mt-4">
              {item.title}
            </h2>
          </div>,
        )}
      </div>
    </div>
  );
};
