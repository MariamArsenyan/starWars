import { NewsCard } from './cards/NewsCard';
import { SeriesCard } from './cards/SeriesCard';
import { Footer } from './common/Footer';

export const HomeComponent = () => {
  return (
    <div className="w-full ">
      <NewsCard />
      <SeriesCard />
      <Footer/>
    </div>
  );
};
