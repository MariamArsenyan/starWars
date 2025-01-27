import { NewsCard } from './NewsCard';
import { SeriesCard } from './SeriesCard';
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
