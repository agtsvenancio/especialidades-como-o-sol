export type Specialty = {
  name: string;
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  what: string;
  when: string;
  choose: string;
  cta: string;
  image: string;
  imageOrientation: string;
  safety?: string;
};

export const specialties: Specialty[] = [
  {
    name: "Cuidados com Estomias", slug: "cuidados-com-estomias", title: "Cuidados com Estomias | Encontre profissionais", h1: "Profissionais de Cuidados com Estomias",
    description: "Conheça profissionais que atuam com cuidados com estomias. Veja formação, modalidades de atendimento e informações para escolher com segurança.",
    intro: "Cuidados com estomias envolvem orientação, acompanhamento e suporte às pessoas que vivem com estomias intestinais ou urinárias. Nesta área, você pode encontrar profissionais com experiência no cuidado da pele ao redor do estoma, adaptação de equipamentos coletores, educação para o autocuidado e acompanhamento das necessidades da rotina.",
    what: "O atendimento relacionado às estomias busca apoiar a pessoa na adaptação ao uso de dispositivos, na proteção da pele periestomal e na identificação de situações que merecem avaliação profissional. Também pode incluir educação de familiares e cuidadores, orientações sobre rotina e conforto, além de encaminhamento para outros serviços quando necessário.",
    when: "A busca pode fazer sentido após a confecção de uma estomia, diante de dificuldades de adaptação, vazamentos frequentes, desconforto, alterações na pele ao redor do estoma ou quando houver necessidade de revisar a rotina de cuidados.",
    choose: "Observe formação, experiência com estomias, registro profissional quando aplicável, modalidade de atendimento e descrição clara da atuação. O perfil deve informar limites do serviço e evitar promessas de resultado.",
    cta: "Veja profissionais que atuam com cuidados em estomias.", image: "Profissional de enfermagem orientando uma pessoa sobre cuidados com estomia, ambiente clínico acolhedor", imageOrientation: "Plano médio, foco nas mãos e na orientação, sem exposição de feridas",
    safety: "Dor intensa, sangramento persistente ou piora súbita exigem avaliação em um serviço de saúde."
  },
  {
    name: "Cuidados Paliativos", slug: "cuidados-paliativos", title: "Cuidados Paliativos | Encontre profissionais", h1: "Profissionais de Cuidados Paliativos",
    description: "Conheça profissionais que atuam com cuidados paliativos, suas formações, modalidades de atendimento e escopos de cuidado.",
    intro: "Cuidados paliativos são voltados à qualidade de vida de pessoas que convivem com doenças graves, progressivas ou ameaçadoras da vida, considerando também as necessidades de familiares e cuidadores. A abordagem pode envolver controle de sintomas, comunicação, apoio emocional, planejamento de cuidados e integração entre diferentes profissionais.",
    what: "O cuidado paliativo não se limita aos momentos finais de vida. Ele pode ser associado ao tratamento de uma doença desde fases precoces, conforme a necessidade do paciente. O objetivo é reduzir sofrimento evitável e organizar decisões de cuidado de forma proporcional, individualizada e respeitosa.",
    when: "Pode ser indicado quando há sintomas difíceis de controlar, impacto importante da doença na rotina, necessidade de organizar cuidados em casa, dúvidas sobre objetivos de tratamento ou sobrecarga de familiares e cuidadores.",
    choose: "Considere formação, experiência em cuidados paliativos, capacidade de atuação multiprofissional, modalidade de atendimento e transparência sobre o escopo do serviço. Em atendimentos clínicos, confirme os registros profissionais pertinentes.",
    cta: "Encontre profissionais com atuação em cuidados paliativos.", image: "Profissional de saúde conversando com paciente idoso e familiar em ambiente tranquilo", imageOrientation: "Plano médio horizontal adaptado ao recorte circular, expressões acolhedoras",
    safety: "Situações de urgência devem ser direcionadas imediatamente aos serviços de emergência."
  },
  {
    name: "Emergências e Cuidados Intensivos", slug: "emergencias-e-cuidados-intensivos", title: "Emergências e Cuidados Intensivos | Profissionais", h1: "Profissionais de Emergências e Cuidados Intensivos",
    description: "Encontre profissionais de emergências e cuidados intensivos e consulte formação, experiência e tipo de atuação.",
    intro: "Emergências e cuidados intensivos reúnem profissionais com experiência em cenários que exigem avaliação rápida, monitorização contínua, protocolos assistenciais e tomada de decisão em ambientes de alta complexidade, como pronto atendimento, emergência hospitalar e unidades de terapia intensiva.",
    what: "A atuação está ligada à assistência de pacientes com condições agudas ou potencialmente instáveis, à segurança dos processos e ao trabalho integrado entre diferentes profissionais. Nesta plataforma, a categoria funciona como uma área de atuação e não como substituta de um serviço de urgência.",
    when: "Esta página é indicada para localizar profissionais, consultores, docentes ou prestadores que atuem na área.",
    choose: "Avalie formação, experiência prática, certificações relevantes, registro profissional e descrição objetiva do serviço. O perfil precisa esclarecer se a atuação é em assistência, treinamento, consultoria, gestão ou educação.",
    cta: "Conheça profissionais com atuação em emergências e cuidados intensivos.", image: "Equipe de saúde em unidade de cuidados intensivos, em atuação coordenada e sem situação gráfica", imageOrientation: "Plano aberto, ambiente hospitalar claro, equipamentos ao fundo",
    safety: "Em uma emergência real — falta de ar intensa, dor torácica, perda de consciência, sinais de AVC ou risco imediato à vida — procure um serviço de urgência ou acione o SAMU pelo 192."
  },
  {
    name: "Saúde Coletiva", slug: "saude-coletiva", title: "Saúde Coletiva | Encontre profissionais", h1: "Profissionais de Saúde Coletiva",
    description: "Conheça profissionais de saúde coletiva para projetos, prevenção, educação, pesquisa, planejamento e gestão em saúde.",
    intro: "Saúde coletiva reúne ações voltadas à promoção da saúde, prevenção de agravos, planejamento, vigilância, educação em saúde e organização de serviços para grupos, comunidades e populações. É uma área ampla, com participação de profissionais de diferentes formações.",
    what: "O trabalho pode envolver análise de indicadores, desenvolvimento de programas, vigilância epidemiológica, planejamento de políticas e serviços, educação em saúde, pesquisa e gestão de projetos. O foco costuma estar na organização de respostas coletivas às necessidades de saúde.",
    when: "A busca pode ser útil para instituições, empresas, organizações sociais, municípios, projetos de pesquisa e iniciativas comunitárias que precisam de experiência em planejamento, programas de saúde, prevenção e gestão de ações coletivas.",
    choose: "Observe formação, trajetória, experiência com o tipo de projeto, conhecimento de políticas públicas e capacidade de trabalhar com dados, equipes e comunidades. Defina se a demanda é assistencial, educacional, estratégica, regulatória ou de pesquisa.",
    cta: "Encontre profissionais de saúde coletiva por área de atuação.", image: "Equipe multiprofissional reunida com representantes de uma comunidade em ação de saúde coletiva", imageOrientation: "Plano aberto, grupo diverso centralizado no recorte circular"
  },
  {
    name: "Terapias Comportamentais", slug: "terapias-comportamentais", title: "Terapias Comportamentais | Encontre profissionais", h1: "Profissionais de Terapias Comportamentais",
    description: "Encontre profissionais de terapias comportamentais e consulte formação, abordagem e modalidades de atendimento.",
    intro: "Terapias comportamentais reúnem abordagens que observam a relação entre comportamento, contexto, aprendizagem e consequências. Dependendo da formação do profissional, podem ser utilizadas em acompanhamento psicológico, educação, desenvolvimento de habilidades e outras intervenções baseadas em comportamento.",
    what: "A categoria pode abranger diferentes linhas e técnicas. Por isso, o perfil de cada profissional deve deixar clara sua formação, abordagem e escopo de atendimento. Em psicologia, é especialmente importante informar o registro profissional e evitar generalizações sobre resultados.",
    when: "A busca pode ocorrer diante de dificuldades emocionais ou comportamentais, necessidade de desenvolver habilidades, mudanças de rotina, acompanhamento psicológico ou orientação especializada. A escolha da abordagem deve considerar a demanda individual.",
    choose: "Verifique graduação, especializações, registro no conselho quando aplicável, abordagem utilizada, público atendido e modalidade de atendimento. Prefira perfis que expliquem como trabalham sem prometer cura ou resultado garantido.",
    cta: "Encontre profissionais que trabalham com terapias comportamentais.", image: "Profissional e paciente em conversa terapêutica, sentados frente a frente em consultório", imageOrientation: "Plano médio lateral, luz natural e distância respeitosa"
  },
  {
    name: "Obstetrícia e Neonatologia", slug: "obstetricia-e-neonatologia", title: "Obstetrícia e Neonatologia | Profissionais", h1: "Profissionais de Obstetrícia e Neonatologia",
    description: "Encontre profissionais de obstetrícia e neonatologia e consulte formação, experiência e modalidades de atendimento.",
    intro: "Obstetrícia e neonatologia abrangem o cuidado relacionado à gestação, parto, pós-parto e período neonatal. A atuação pode envolver assistência, educação, acompanhamento, consultoria, gestão e suporte a gestantes, puérperas, recém-nascidos e famílias, conforme a habilitação de cada profissional.",
    what: "A obstetrícia acompanha diferentes etapas da gestação e do parto, enquanto a neonatologia se concentra na atenção ao recém-nascido, especialmente nos primeiros dias e semanas de vida. Por envolver situações clínicas sensíveis, perfis precisam apresentar credenciais com clareza.",
    when: "A plataforma pode ser usada para localizar profissionais para acompanhamento, orientação, educação perinatal, consultoria ou suporte especializado.",
    choose: "Confirme formação, especializações, registro profissional, experiência, público atendido, local de atuação e limites do serviço. Para atendimentos clínicos, privilegie perfis com informações verificáveis e descrição precisa da habilitação.",
    cta: "Encontre profissionais de obstetrícia e neonatologia.", image: "Profissional de saúde acompanhando mãe com recém-nascido em ambiente de cuidado neonatal", imageOrientation: "Plano médio, mãe e bebê centralizados, atmosfera serena",
    safety: "Intercorrências na gestação, parto, puerpério ou no recém-nascido devem ser avaliadas por um serviço de saúde apropriado e, quando urgentes, sem atraso."
  },
  {
    name: "Saúde Mental", slug: "saude-mental", title: "Saúde Mental | Encontre profissionais", h1: "Profissionais de Saúde Mental",
    description: "Conheça profissionais que atuam com saúde mental e compare formação, abordagem e modalidades de atendimento.",
    intro: "Saúde mental envolve prevenção, avaliação, cuidado e acompanhamento de questões emocionais, psicológicas, comportamentais e psiquiátricas. A categoria pode reunir diferentes profissões e abordagens, desde que a formação, o registro profissional e o tipo de atendimento sejam apresentados com transparência.",
    what: "O cuidado pode incluir psicoterapia, avaliação, acompanhamento médico, ações de promoção de saúde, educação, orientação e trabalho multiprofissional. Cada profissão possui atribuições próprias, e as diferentes práticas não devem ser apresentadas como equivalentes.",
    when: "Pode ser útil procurar ajuda diante de sofrimento emocional persistente, mudanças importantes de humor ou comportamento, dificuldades que afetam a rotina ou quando houver recomendação de outro profissional.",
    choose: "Considere a necessidade apresentada, a formação, o registro quando aplicável, a abordagem, a experiência com o tema e a modalidade de atendimento. Perfis devem ser claros sobre o que oferecem e não prometer resultados garantidos.",
    cta: "Encontre profissionais de saúde mental e conheça seus perfis.", image: "Profissional de saúde mental em escuta atenta durante atendimento individual", imageOrientation: "Plano médio, ambiente privativo e acolhedor, sem poses artificiais",
    safety: "Em risco imediato de autoagressão, suicídio, violência ou crise grave, busque atendimento de urgência. O CVV atende gratuitamente pelo 188."
  },
  {
    name: "Gestão de Qualidade e Segurança do Paciente", slug: "gestao-de-qualidade-e-seguranca-do-paciente", title: "Gestão de Qualidade e Segurança do Paciente", h1: "Profissionais de Gestão de Qualidade e Segurança do Paciente",
    description: "Encontre profissionais de gestão de qualidade e segurança do paciente para consultoria, educação e melhoria de processos.",
    intro: "Gestão de qualidade e segurança do paciente reúne profissionais que atuam na melhoria de processos assistenciais, gestão de riscos, indicadores, protocolos, auditorias, educação permanente e implantação de práticas voltadas à segurança em serviços de saúde.",
    what: "A área pode apoiar hospitais, clínicas, serviços de diagnóstico, instituições de longa permanência e equipes assistenciais na construção de processos mais seguros. O trabalho pode incluir análise de eventos, desenho de fluxos, monitoramento de indicadores e preparação para acreditação.",
    when: "A contratação pode ser pertinente quando uma instituição precisa estruturar protocolos, revisar processos, melhorar indicadores, capacitar equipes, organizar núcleos de segurança do paciente ou preparar-se para auditorias e certificações.",
    choose: "Avalie experiência em serviços semelhantes, formação, certificações, domínio de normas aplicáveis e capacidade de transformar diagnóstico em plano de ação. O perfil deve indicar se a atuação é consultiva, assistencial, educacional ou de gestão.",
    cta: "Localize profissionais de qualidade e segurança do paciente.", image: "Profissional de qualidade em saúde analisando indicadores com equipe hospitalar", imageOrientation: "Plano médio, mesa de reunião e painel de dados discretos ao fundo"
  },
  {
    name: "Nutriterapia", slug: "nutriterapia", title: "Nutriterapia | Encontre profissionais", h1: "Profissionais de Nutriterapia",
    description: "Conheça profissionais que atuam com nutriterapia, terapia nutricional e acompanhamento nutricional especializado.",
    intro: "Nutriterapia, ou terapia nutricional, está relacionada à avaliação e ao suporte nutricional de pessoas que necessitam de estratégias específicas de alimentação ou terapia nutricional, conforme sua condição clínica e a atuação de profissionais habilitados.",
    what: "Dependendo do contexto, a terapia nutricional pode envolver alimentação oral adaptada, suplementação e suporte enteral ou parenteral, sempre dentro das competências profissionais e indicações clínicas pertinentes. Em ambiente hospitalar, costuma envolver trabalho multiprofissional.",
    when: "A busca pode ocorrer quando há necessidade de acompanhamento nutricional especializado, risco nutricional, dificuldade de alimentação, recuperação de doença ou cirurgia, ou indicação de terapia nutricional.",
    choose: "Verifique formação, especialização, registro profissional, experiência com o perfil do paciente e modalidade de atendimento. Em casos complexos, prefira profissionais que trabalhem de forma integrada com a equipe assistencial.",
    cta: "Encontre profissionais com atuação em nutriterapia.", image: "Nutricionista avaliando plano de terapia nutricional com paciente", imageOrientation: "Plano médio, profissional e paciente visíveis, materiais clínicos discretos",
    safety: "Mudanças em dieta, suplementos ou vias de alimentação devem ser conduzidas por profissionais habilitados."
  },
  {
    name: "Nutrição Clínica Funcional", slug: "nutricao-clinica-funcional", title: "Nutrição Clínica Funcional | Profissionais", h1: "Nutrição Clínica Funcional",
    description: "Encontre profissionais de nutrição clínica funcional e conheça formação, método e modalidades de acompanhamento.",
    intro: "Nutrição clínica funcional é uma abordagem de atendimento nutricional que considera história clínica, hábitos alimentares, rotina e contexto individual para construir estratégias de alimentação dentro das atribuições do nutricionista. A categoria prioriza profissionais habilitados e informações baseadas em avaliação individual.",
    what: "O atendimento costuma envolver anamnese alimentar, avaliação de hábitos, definição de objetivos e planejamento nutricional. A forma de trabalho varia entre profissionais, e a abordagem não deve ser associada a promessas de cura ou alegações não comprovadas.",
    when: "Pode ser procurada por pessoas que desejam acompanhamento nutricional individualizado, organização da alimentação, suporte em condições clínicas acompanhadas por equipe de saúde ou mudança de hábitos.",
    choose: "Confirme registro profissional, formação complementar, experiência, método de acompanhamento e clareza sobre condutas. Desconfie de promessas de resultados rápidos, diagnósticos sem avaliação ou substituição de tratamento médico.",
    cta: "Encontre profissionais de nutrição clínica funcional.", image: "Nutricionista conversando com paciente diante de alimentos variados e plano alimentar", imageOrientation: "Plano médio, composição clara e natural, alimentos em segundo plano",
    safety: "Diagnósticos, sintomas persistentes e tratamentos em curso devem ser considerados em conjunto com os profissionais responsáveis."
  },
  {
    name: "Reiki", slug: "reiki", title: "Reiki | Encontre profissionais", h1: "Reiki",
    description: "Conheça profissionais que oferecem Reiki, sua formação complementar, modalidade de atendimento e limites da prática.",
    intro: "Reiki é uma prática integrativa utilizada por algumas pessoas com objetivos de relaxamento e bem-estar. Nesta área, os profissionais devem apresentar formação complementar, modalidade de atendimento e uma descrição clara do serviço, sem atribuir à prática efeitos terapêuticos que não estejam bem estabelecidos por evidências científicas.",
    what: "As sessões geralmente envolvem uma prática de imposição ou aproximação das mãos, com foco em relaxamento e experiência subjetiva de bem-estar.",
    when: "A pessoa pode buscar a prática como atividade complementar de bem-estar. Sintomas físicos ou emocionais persistentes, piora do estado de saúde ou situações de urgência devem ser avaliados por profissionais e serviços adequados.",
    choose: "Observe formação declarada, experiência, ambiente de atendimento, transparência sobre limites da prática e ausência de promessas de cura. O perfil deve evitar linguagem que incentive abandono de tratamentos convencionais.",
    cta: "Conheça profissionais que oferecem Reiki.", image: "Sessão de Reiki em ambiente sereno, profissional com mãos próximas ao paciente vestido", imageOrientation: "Plano superior suave, mãos e postura visíveis, sem efeitos luminosos artificiais",
    safety: "Reiki é uma prática complementar e não substitui diagnóstico, tratamento médico, psicoterapia ou qualquer cuidado de saúde necessário."
  },
  {
    name: "Enfermagem Integrativa", slug: "enfermagem-integrativa", title: "Enfermagem Integrativa | Encontre profissionais", h1: "Profissionais de Enfermagem Integrativa",
    description: "Encontre profissionais de enfermagem integrativa e conheça formação, práticas oferecidas e limites de atuação.",
    intro: "Enfermagem integrativa reúne práticas e abordagens complementares incorporadas ao cuidado de enfermagem por profissionais habilitados, respeitando competências profissionais, protocolos, regulamentações e a integração com outros cuidados de saúde.",
    what: "A atuação pode combinar cuidados convencionais de enfermagem com práticas integrativas reconhecidas ou utilizadas no contexto de bem-estar, conforme a capacitação do profissional. O serviço deve separar claramente o cuidado de enfermagem da prática complementar.",
    when: "Pode ser procurada por pessoas que desejam acompanhamento de enfermagem com abordagem ampliada ou por instituições interessadas em projetos de práticas integrativas.",
    choose: "Confirme registro de enfermagem, formação nas práticas oferecidas, experiência e escopo do atendimento. Perfis devem informar limites, contraindicações quando pertinentes e relação da prática com o cuidado convencional.",
    cta: "Encontre profissionais de enfermagem integrativa.", image: "Enfermeira em atendimento integrativo acolhedor, conversando com paciente", imageOrientation: "Plano médio frontal, elementos clínicos e de bem-estar equilibrados",
    safety: "Questões clínicas devem permanecer sob avaliação apropriada e não devem ser tratadas exclusivamente por práticas complementares."
  },
  {
    name: "Biomagnetismo Medicinal", slug: "biomagnetismo-medicinal", title: "Biomagnetismo Medicinal | Profissionais", h1: "Biomagnetismo Medicinal",
    description: "Conheça profissionais de biomagnetismo e consulte informações claras sobre a prática complementar e seus limites.",
    intro: "Biomagnetismo é apresentado por seus praticantes como uma prática complementar que utiliza ímãs em pontos do corpo. Como as alegações clínicas associadas à técnica não possuem comprovação robusta para diagnosticar ou tratar doenças, esta página adota linguagem estritamente descritiva.",
    what: "O conteúdo explica o que cada profissional oferece sem afirmar que o biomagnetismo trata infecções, corrige doenças ou substitui acompanhamento clínico. O serviço pode ser apresentado como prática complementar de bem-estar, quando isso corresponder à atuação real.",
    when: "A prática pode ser procurada por interesse em abordagens complementares. Qualquer sintoma, diagnóstico ou condição de saúde deve continuar sendo avaliado por profissionais habilitados.",
    choose: "Priorize perfis transparentes sobre formação, método, limites e ausência de garantias terapêuticas. Não considere alegações de cura, diagnóstico por magnetismo ou substituição de tratamentos baseados em evidências.",
    cta: "Conheça profissionais que oferecem biomagnetismo, com informações claras sobre a prática.", image: "Profissional explicando uma sessão de biomagnetismo a paciente em ambiente de bem-estar", imageOrientation: "Plano médio, ímãs discretos e sem representação de cura",
    safety: "O biomagnetismo não substitui acompanhamento clínico. Nenhum tratamento prescrito deve ser interrompido com base em orientação não médica."
  },
  {
    name: "Constelação Sistêmica Familiar", slug: "constelacao-sistemica-familiar", title: "Constelação Sistêmica Familiar | Profissionais", h1: "Constelação Sistêmica Familiar",
    description: "Conheça facilitadores de constelação sistêmica familiar, sua formação, método e limites dessa prática complementar.",
    intro: "Constelação sistêmica familiar é uma prática utilizada em alguns contextos de desenvolvimento pessoal e reflexão sobre relações familiares. Não deve ser apresentada como psicoterapia, diagnóstico ou tratamento de transtornos mentais quando conduzida fora das profissões habilitadas.",
    what: "A prática costuma utilizar representações simbólicas de relações e dinâmicas familiares. As interpretações produzidas durante uma sessão são subjetivas e não devem ser tratadas como fatos, diagnósticos ou prova de acontecimentos.",
    when: "A pessoa pode procurar a atividade como experiência de reflexão pessoal, desde que compreenda seu caráter complementar.",
    choose: "Observe formação declarada, postura ética, clareza sobre limites e ausência de afirmações absolutas. Perfis não devem sugerir que a prática substitui psicoterapia, psiquiatria, aconselhamento jurídico ou tratamento de saúde.",
    cta: "Conheça facilitadores de constelação sistêmica familiar.", image: "Facilitador conduzindo dinâmica de reflexão em pequeno grupo", imageOrientation: "Plano aberto, participantes em círculo, ambiente neutro e respeitoso",
    safety: "Questões de saúde mental, violência, trauma, crise ou sofrimento intenso devem ser encaminhadas a profissionais habilitados e serviços apropriados."
  },
  {
    name: "Neurociências Aplicadas à Psicologia", slug: "neurociencias-aplicadas-a-psicologia", title: "Neurociências Aplicadas à Psicologia", h1: "Neurociências Aplicadas à Psicologia",
    description: "Encontre profissionais que trabalham com neurociências aplicadas à psicologia em pesquisa, educação e atendimento.",
    intro: "Neurociências aplicadas à psicologia é uma área de interface entre conhecimentos sobre cérebro, comportamento, cognição e processos psicológicos. O uso desses conhecimentos deve estar vinculado à formação e às atribuições de cada profissional, evitando simplificações ou promessas baseadas apenas em linguagem neurocientífica.",
    what: "A área pode aparecer em pesquisa, educação, avaliação, psicologia clínica, neuropsicologia e desenvolvimento humano. Nem todo profissional que utiliza conceitos de neurociência possui habilitação para avaliação neuropsicológica ou diagnóstico.",
    when: "A busca pode ser útil para acompanhamento psicológico, formação, pesquisa, palestras, consultoria ou projetos que envolvam comportamento e cognição. Em avaliação clínica, diagnóstico ou tratamento, verifique a habilitação específica.",
    choose: "Considere formação acadêmica, registro profissional quando aplicável, área real de atuação e evidências que sustentem os métodos. Evite perfis que usem termos como “neuro” apenas para dar aparência científica a promessas genéricas.",
    cta: "Encontre profissionais que trabalham com neurociências aplicadas à psicologia.", image: "Psicóloga analisando material de avaliação cognitiva com paciente adulto", imageOrientation: "Plano médio, interação humana em primeiro plano, sem cérebro digital"
  },
  {
    name: "Coaching Comportamental", slug: "coaching-comportamental", title: "Coaching Comportamental | Profissionais", h1: "Coaching Comportamental",
    description: "Encontre profissionais de coaching comportamental para objetivos, carreira, hábitos e desenvolvimento de competências.",
    intro: "Coaching comportamental é uma atividade voltada a objetivos, planejamento, desenvolvimento de habilidades e acompanhamento de mudanças de comportamento em contextos pessoais ou profissionais. A categoria é apresentada como desenvolvimento, não como substituta de psicoterapia, tratamento médico ou diagnóstico de saúde mental.",
    what: "Um processo pode utilizar metas, planos de ação, acompanhamento de progresso e reflexão sobre hábitos. O escopo deve ser definido com clareza desde o início, especialmente quando a demanda envolve sofrimento emocional.",
    when: "Pode ser buscado para organização de metas, desempenho, carreira, liderança, hábitos ou desenvolvimento de competências.",
    choose: "Analise formação, experiência prática, metodologia, referências profissionais e clareza contratual. Prefira quem delimita o escopo do coaching e não faz promessas clínicas ou garantias de transformação.",
    cta: "Encontre profissionais de coaching comportamental.", image: "Profissional de coaching em reunião de planejamento com cliente", imageOrientation: "Plano médio, caderno e metas visíveis, ambiente profissional natural",
    safety: "Depressão, ansiedade intensa, trauma, crise ou outros quadros de saúde devem ser acompanhados por profissionais habilitados."
  },
  {
    name: "Psicodrama", slug: "psicodrama", title: "Psicodrama | Encontre profissionais", h1: "Profissionais de Psicodrama",
    description: "Encontre profissionais com formação em psicodrama para contextos clínicos, grupais, educacionais ou organizacionais.",
    intro: "Psicodrama é uma abordagem que utiliza recursos de ação, dramatização, papéis e interação para explorar experiências, relações e situações. Pode estar presente em contextos clínicos, grupais, educacionais e organizacionais, conforme a formação e a habilitação profissional.",
    what: "Em psicoterapia, o psicodrama deve ser conduzido por profissional habilitado dentro de suas atribuições. Aplicações não clínicas, como desenvolvimento de grupos e educação, precisam ser descritas de forma distinta.",
    when: "A busca pode ocorrer por interesse em psicoterapia, trabalho em grupo, desenvolvimento pessoal, formação ou intervenção organizacional. A adequação depende da demanda, do contexto e da qualificação de quem conduz o processo.",
    choose: "Verifique profissão de origem, registro quando aplicável, formação em psicodrama, experiência e tipo de atendimento. O perfil deve informar se a atuação é clínica, educacional, organizacional ou outra.",
    cta: "Encontre profissionais com formação ou atuação em psicodrama.", image: "Sessão de psicodrama em grupo com participantes em atividade orientada", imageOrientation: "Plano aberto, movimento natural e facilitador visível"
  },
  {
    name: "Terapias Integrativas", slug: "terapias-integrativas", title: "Terapias Integrativas | Encontre profissionais", h1: "Terapias Integrativas",
    description: "Explore profissionais e práticas integrativas, com informações sobre formação, métodos e limites de atuação.",
    intro: "Terapias integrativas reúnem diferentes práticas complementares voltadas a bem-estar e cuidado ampliado. Como o termo engloba métodos distintos, esta área ajuda você a identificar qual prática cada profissional oferece, sua formação e os limites da atuação.",
    what: "Algumas práticas integrativas são utilizadas em serviços de saúde ou em contextos de bem-estar, mas o nível de evidência, as indicações e a regulamentação variam bastante. As práticas não devem ser tratadas como equivalentes nem receber benefícios clínicos sem respaldo adequado.",
    when: "A busca pode ocorrer como complemento a cuidados já realizados ou por interesse em práticas de bem-estar. Sintomas, diagnósticos e tratamentos devem continuar sendo acompanhados por profissionais habilitados.",
    choose: "Leia o perfil, identifique a prática específica, formação, experiência e limites informados. Prefira profissionais que trabalham de forma responsável, sem promessas de cura e sem orientar abandono de tratamentos convencionais.",
    cta: "Explore profissionais e práticas integrativas.", image: "Profissional apresentando prática integrativa de bem-estar a paciente", imageOrientation: "Plano médio, ambiente claro e prática identificável, sem simbologia mística",
    safety: "Práticas integrativas são complementares e não substituem diagnóstico, tratamento ou cuidados de saúde necessários."
  },
  {
    name: "Psicanálise Clínica", slug: "psicanalise-clinica", title: "Psicanálise Clínica | Encontre profissionais", h1: "Psicanálise Clínica",
    description: "Encontre psicanalistas e conheça formação, trajetória, abordagem e modalidades de atendimento.",
    intro: "Psicanálise é uma abordagem de escuta e investigação de experiências subjetivas, relações, conflitos e padrões que se repetem ao longo da vida. Os perfis devem apresentar formação, trajetória, modalidade de atendimento e, quando houver profissão regulamentada, o respectivo registro.",
    what: "O trabalho psicanalítico costuma acontecer por meio da fala e da escuta em encontros regulares. Existem diferentes escolas e formações, por isso é importante que cada profissional descreva sua trajetória e não utilize títulos ou credenciais que possam induzir a erro.",
    when: "Pessoas podem buscar psicanálise quando desejam compreender melhor questões emocionais, relacionais ou padrões de comportamento, ou quando procuram um espaço continuado de escuta.",
    choose: "Considere formação, supervisão, experiência, clareza ética, modalidade de atendimento e compatibilidade com a demanda. Se o perfil mencionar psicologia, medicina ou outra profissão regulamentada, o registro correspondente deve ser verificável.",
    cta: "Encontre psicanalistas e conheça suas formas de atendimento.", image: "Psicanalista em escuta durante sessão com paciente em consultório sóbrio", imageOrientation: "Plano médio lateral, duas pessoas e ambiente reservado",
    safety: "Em crises agudas, risco de autoagressão ou sintomas que exijam avaliação médica, busque suporte de saúde apropriado."
  },
  {
    name: "Estomaterapia", slug: "estomaterapia", title: "Estomaterapia | Encontre profissionais", h1: "Profissionais de Estomaterapia",
    description: "Encontre estomaterapeutas para cuidados relacionados a estomias, feridas, incontinências e educação para o autocuidado.",
    intro: "Estomaterapia é uma área especializada da enfermagem relacionada ao cuidado de pessoas com estomias, feridas, incontinências e outras necessidades específicas, conforme formação e habilitação profissional. O perfil do estomaterapeuta deve destacar qualificação, registro e escopo real de atuação.",
    what: "O trabalho pode envolver prevenção e cuidado de lesões de pele, acompanhamento de estomias, orientação sobre dispositivos, avaliação de feridas, educação para o autocuidado e suporte a pacientes e familiares. A conduta depende da avaliação profissional e do contexto clínico.",
    when: "Pode ser indicado buscar um estomaterapeuta diante de necessidades relacionadas a estomias, feridas de difícil cicatrização, prevenção de lesões, incontinências ou orientação especializada.",
    choose: "Verifique graduação em enfermagem, registro profissional, formação em estomaterapia, experiência e tipo de atendimento. O perfil deve informar se realiza atendimento domiciliar, ambulatorial, hospitalar, consultoria ou educação.",
    cta: "Encontre estomaterapeutas e veja os perfis disponíveis.", image: "Enfermeira estomaterapeuta orientando paciente em consultório", imageOrientation: "Plano médio, interação acolhedora, sem exposição de lesões",
    safety: "Sinais de infecção, piora rápida, dor intensa ou outras situações agudas exigem avaliação médica ou serviço de saúde."
  },
  {
    name: "Enfermagem Dermatológica", slug: "enfermagem-dermatologica", title: "Enfermagem Dermatológica | Profissionais", h1: "Profissionais de Enfermagem Dermatológica",
    description: "Encontre profissionais de enfermagem dermatológica para cuidados de pele, prevenção, feridas e educação em saúde.",
    intro: "Enfermagem dermatológica reúne conhecimentos e cuidados de enfermagem relacionados à pele, prevenção de lesões, acompanhamento de feridas, educação em saúde e outros procedimentos compatíveis com a formação e habilitação do enfermeiro.",
    what: "A atuação pode ocorrer em clínicas, hospitais, atendimento domiciliar, consultoria, educação e programas de prevenção. Os procedimentos variam conforme capacitação e normas profissionais, por isso o perfil deve detalhar com precisão o que é realizado.",
    when: "A busca pode ser útil para cuidados de pele e feridas dentro do escopo de enfermagem, orientação preventiva, acompanhamento de lesões ou suporte em rotinas de cuidado.",
    choose: "Confirme registro de enfermagem, formação complementar, experiência, ambiente de atendimento e protocolos utilizados. Informações sobre procedimentos devem ser objetivas e compatíveis com as atribuições profissionais.",
    cta: "Encontre profissionais de enfermagem dermatológica.", image: "Enfermeira dermatológica examinando a pele do braço de paciente", imageOrientation: "Close moderado das mãos e área examinada, sem lesões gráficas",
    safety: "Alterações suspeitas na pele, infecções, lesões graves ou sintomas sistêmicos precisam de avaliação médica apropriada."
  }
];

export const specialtyBySlug = (slug: string) => specialties.find((item) => item.slug === slug);
