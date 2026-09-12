import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { specialties } from "@/lib/specialties";

const title = "Especialidades | Encontre profissionais por área";
const description = "Explore 21 especialidades e encontre profissionais de saúde, cuidado e bem-estar de acordo com a área de atuação.";

export const Route = createFileRoute("/especialidades/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/especialidades" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/especialidades" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CollectionPage", name: title, description, url: "/especialidades", mainEntity: { "@type": "ItemList", numberOfItems: specialties.length, itemListElement: specialties.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, url: `/especialidades/${item.slug}` })) } }) }],
  }),
  component: SpecialtiesIndex,
});

function SpecialtiesIndex() {
  return (
    <main>
      <section className="index-intro">
        <div className="page-shell index-intro__inner">
          <p className="eyebrow">Cuidado que respeita cada jornada</p>
          <h1>O cuidado certo começa pela especialidade certa</h1>
          <p className="lead">Explore nossas áreas de atuação e encontre profissionais alinhados ao que você precisa neste momento da sua jornada.</p>
        </div>
      </section>

      <section className="specialties-section" aria-labelledby="areas-heading">
        <div className="page-shell">
          <div className="section-heading">
            <p className="eyebrow">21 áreas de atuação</p>
            <h2 id="areas-heading">Encontre a área que procura</h2>
            <p>As imagens estão demarcadas para receber as fotografias definitivas, com o formato e o enquadramento recomendados.</p>
          </div>
          <div className="specialties-grid">
            {specialties.map((item, index) => (
              <article className="specialty-card" key={item.slug}>
                <ImagePlaceholder compact description={item.image} orientation={item.imageOrientation} />
                <div className="specialty-card__body">
                  <span className="specialty-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Link to="/especialidades/$especialidade" params={{ especialidade: item.slug }} className="text-link">
                    Conhecer área <ArrowUpRight aria-hidden="true" size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
