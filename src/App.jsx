import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { Pricing } from './components/Pricing/Pricing';
import { Footer } from './components/Footer/Footer';

import styles from './styles/app.module.scss';

function App() {
   return (
      <main>
         <Nav />
         <Hero />
         <hr className={styles.hr__line} />
         <Header />
         <Section />
         <hr className={styles.hr__line} />
         <Pricing />
         <hr className={styles.hr__line} />
         <Footer />
      </main>
   );
}

export default App;
