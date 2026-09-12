import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/especialidades" });
  },
  head: () => ({
    meta: [
      { title: "Como o Sol | Especialidades" },
      { name: "description", content: "Conheça as áreas de atuação e encontre profissionais de saúde, cuidado e bem-estar." },
      { property: "og:title", content: "Como o Sol | Especialidades" },
      { property: "og:description", content: "Conheça as áreas de atuação e encontre profissionais de saúde, cuidado e bem-estar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
