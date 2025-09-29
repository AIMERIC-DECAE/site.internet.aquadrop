import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { MouseEvent, useCallback } from 'react';

const navItemClass =
  'transition-colors hover:text-aquadrop-neutral-100/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aquadrop-ink-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-aquadrop-bg-deep';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, hash: string) => {
      event.preventDefault();

      const scrollToSection = () => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (location.pathname !== '/') {
        navigate('/', { replace: false });
        setTimeout(scrollToSection, 150);
      } else {
        scrollToSection();
      }
    },
    [location.pathname, navigate],
  );

  return (
    <header className="border-b border-white/5 bg-aquadrop-bg-deep/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-6">
        <Link
          to="/"
          className="text-sm font-semibold uppercase tracking-[0.4em] text-aquadrop-ink-primary"
        >
          Aquadrop
        </Link>
        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-aquadrop-neutral-100/70 md:flex"
        >
          <a href="#collection" onClick={(event) => handleAnchorClick(event, '#collection')} className={navItemClass}>
            Collection
          </a>
          <a href="#engagements" onClick={(event) => handleAnchorClick(event, '#engagements')} className={navItemClass}>
            Engagements
          </a>
          <a href="#recharges" onClick={(event) => handleAnchorClick(event, '#recharges')} className={navItemClass}>
            Recharges
          </a>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navItemClass} ${isActive ? 'text-aquadrop-ink-primary' : ''}`
            }
          >
            À propos
          </NavLink>
        </nav>
        <a className="btn-secondary hidden sm:inline-flex" href="#compte">
          Mon espace
        </a>
      </div>
    </header>
  );
}

export default Navbar;
