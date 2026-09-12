import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { specialties, specialtyBySlug } from "@/lib/specialties";

export const Route = createFileRoute("/especialidades/$especialidade")({
  beforeLoad: ({ params }) => {
    if (!specialtyBySlug(params.especialidade)) throw notFound();
  },
  head: ({ params }) => {
    const item = specialtyBySlug(params.especialidade);
    if (!item) return { meta: [{ title: "Especialidade não encontrada — Como o Sol" }, { name: "robots", content: "noindex" }] };
    const url = `/especialidades/${item.slug}`;
    return {
      meta: [
        { title: item.title }, { name: "description", content: item.description },
        { property: "og:title", content: item.title }, { property: "og:description", content: item.description },
        { property: "og:type", content: "website" }, { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Especialidades", item: "/especialidades" },
        { "@type": "ListItem", position: 2, name: item.name, item: url },
      ] }) }],
    };
  },
  component: SpecialtyPage,
  notFoundComponent: SpecialtyNotFound,
});

function SpecialtyPage() {
  const { especialidade } = Route.useParams();
  const item = specialtyBySlug(especialidade);
  if (!item) return null;
  const index = specialties.findIndex((specialty) => specialty.slug === item.slug);
  const previous = index > 0 ? specialties[index - 1] : undefined;
  const next = index < specialties.length - 1 ? specialties[index + 1] : undefined;

  return (
    <main>
      <div className="page-shell">
        <nav className="breadcrumb" aria-label="Caminho de navegação">
          <Link to="/especialidades">Especialidades</Link><span aria-hidden="true">/</span><span aria-current="page">{item.name}</span>
        </nav>
      </div>

      <section className="detail-intro">
        <div className="page-shell detail-intro__grid">
          <div>
            <p className="eyebrow">Área de atuação</p>
            <h1>{item.h1}</h1>
            <p className="lead">{item.intro}</p>
          </div>
          <ImagePlaceholder description={item.image} orientation={item.imageOrientation} />
        </div>
      </section>

      <section className="editorial-section">
        <div className="page-shell editorial-grid">
          <aside className="section-index" aria-label="Nesta página">
            <span>Nesta página</span>
            <a href="#o-que-e">O que é</a><a href="#quando-buscar">Quando buscar</a><a href="#como-escolher">Como escolher</a>
          </aside>
          <div className="editorial-content">
            <article id="o-que-e"><span className="section-number">01</span><h2>O que é</h2><p>{item.what}</p></article>
            <article id="quando-buscar"><span className="section-number">02</span><h2>Quando buscar</h2><p>{item.when}</p></article>
            {item.safety && <aside className="safety-notice"><AlertTriangle aria-hidden="true" size={22} /><div><strong>Orientação importante</strong><p>{item.safety}</p></div></aside>}
            <article id="como-escolher"><span className="section-number">03</span><h2>Como escolher um profissional</h2><p>{item.choose}</p></article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="page-shell cta-band__inner">
          <div><p className="eyebrow">Próximo passo</p><h2>{item.cta}</h2><p>Em breve, esta área reunirá os perfis disponíveis para você comparar formação, experiência e modalidade de atendimento.</p></div>
          <Link to="/especialidades" className="button-link">Ver todas as especialidades <ArrowRight aria-hidden="true" size={18} /></Link>
        </div>
      </section>

      <nav className="page-shell sibling-nav" aria-label="Navegação entre especialidades">
        {previous ? <Link to="/especialidades/$especialidade" params={{ especialidade: previous.slug }} className="sibling-link"><ArrowLeft aria-hidden="true" /><span><small>Área anterior</small>{previous.name}</span></Link> : <span />}
        {next ? <Link to="/especialidades/$especialidade" params={{ especialidade: next.slug }} className="sibling-link sibling-link--next"><span><small>Próxima área</small>{next.name}</span><ArrowRight aria-hidden="true" /></Link> : <span />}
      </nav>
    </main>
  );
}

function SpecialtyNotFound() {
  return (
    <main className="not-found page-shell">
      <p className="eyebrow">Página não encontrada</p>
      <h1>Esta especialidade não está disponível</h1>
      <p>Confira o endereço ou volte à lista completa das áreas de atuação.</p>
      <Link to="/especialidades" className="button-link"><ArrowLeft aria-hidden="true" size={18} /> Ver especialidades</Link>
    </main>
  );
}
