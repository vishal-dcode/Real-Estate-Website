import './components/css/main.css';
import Header from './components/js/Header';
import Hero from './components/js/Hero';
import Residencies from './components/js/Residencies';
import Value from './components/js/Value';
import Footer from './components/js/Footer';

function App() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <Hero />
      <Residencies />
      <Value />
      <Footer />
    </main>
  );
}

export default App;

