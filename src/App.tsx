import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="flex min-h-screen flex-col bg-aquadrop-bg-deep text-aquadrop-ink-body">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="border-t border-white/5 bg-aquadrop-bg-deep py-10 text-center text-xs uppercase tracking-[0.32em] text-aquadrop-neutral-700">
          © {new Date().getFullYear()} Aquadrop · Durable par nature
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
