
// route homepage
import { Nav } from '../nav/nav';
import { Moviesort } from './movie-sort/moviesort';
import { Footer } from '../footer/footer';


export const Moviepage = () => {
  return (
    <div>
     <Nav/>
    <Moviesort/>
      <Footer />
    </div>
  );
};
