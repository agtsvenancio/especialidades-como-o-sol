import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/como-o-sol-logo.png.asset.json";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/especialidades" aria-label="Como o Sol — Especialidades" className="brand-link">
          <img src={logoAsset.url} alt="Como o Sol" className="brand-logo" />
        </Link>
        <nav aria-label="Navegação principal">
          <Link to="/especialidades" className="nav-link" activeProps={{ className: "nav-link nav-link--active" }}>
            Especialidades
          </Link>
        </nav>
      </div>
    </header>
  );
}
