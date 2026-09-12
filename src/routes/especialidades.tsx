import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/especialidades")({
  component: SpecialtiesLayout,
});

function SpecialtiesLayout() {
  return (
    <>
      <SiteHeader />
      <Outlet />
      <footer className="site-footer">
        <div className="page-shell site-footer__inner">
          <p>Como o Sol</p>
          <p>Cuidado, saúde e bem-estar com informação responsável.</p>
        </div>
      </footer>
    </>
  );
}