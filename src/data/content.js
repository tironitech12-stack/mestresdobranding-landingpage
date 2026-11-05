import { AppWindow, Bot, BrainCircuit, ChartNoAxesCombined, CloudCog, Compass, ContactRound, DatabaseZap, Globe2, Handshake, Layers3, MessagesSquare, Route, SearchCheck, ShieldCheck, SlidersHorizontal, Sparkles, Target, Workflow } from 'lucide-react';

export const strengths = [
  { icon: Compass, text: 'Branding & posicionamento' },
  { icon: AppWindow, text: 'CRM & ERP integrados' },
  { icon: Bot, text: 'Automação & IA' },
  { icon: Target, text: 'Aquisição & vendas' },
  { icon: Handshake, text: 'Comunidade & mentoria' },
];

export const toolData = [
  {
    id:'crm', num:'01', title:'CRM + ERP', tag:'Organização e gestão', icon: Layers3,
    subtitle:'Sua empresa organizada. Suas decisões amparadas por dados.',
    description:'Conecte a rotina comercial à operação: organize contatos, oportunidades, clientes, cadastros e processos num ambiente pensado para pequenas e médias empresas.',
    benefits:['Visibilidade do funil de vendas e das negociações','Menos planilhas desconectadas e retrabalho','Informações de clientes e da operação centralizadas'],
    steps:['Ativação de conta e configuração inicial','Cadastro e importação assistida de dados, conforme plano','Uso diário com painéis de acompanhamento'],
    note:'No Essential, acesso às funcionalidades essenciais. Recursos avançados, integrações e módulos de ERP dependem de liberação e escopo.'
  },
  {
    id:'chatbo', num:'02', title:'ChatBÔ', tag:'Atendimento inteligente', icon: MessagesSquare,
    subtitle:'Atenda melhor sem aumentar a complexidade da operação.',
    description:'Automatize jornadas de atendimento e respostas a dúvidas recorrentes, organize conversas e encaminhe situações que exigem atenção humana.',
    benefits:['Respostas mais rápidas nos canais habilitados','Triagem inteligente e transferência para equipe','Histórico e contexto para melhorar atendimento'],
    steps:['Definição dos canais e políticas de atendimento','Configuração de base de conhecimento e fluxos','Monitoramento de uso, custos e qualidade'],
    note:'Disponibilidade por canal, volume de conversas, consumo de IA e integrações sujeitos às franquias e à etapa de implantação.'
  },
  {
    id:'mestrelead', num:'03', title:'MestreLead', tag:'Prospecção comercial', icon: ContactRound,
    subtitle:'Transforme prospecção em processo, não em improviso.',
    description:'Estruture a identificação de oportunidades comerciais, organize listas, personalize abordagens e acompanhe o desenvolvimento de relacionamentos B2B.',
    benefits:['Pipeline claro para novas oportunidades','Cadências e tarefas comerciais mais organizadas','Abordagens alinhadas à segmentação e às permissões'],
    steps:['Definição de perfil de cliente ideal','Configuração de cadências e etapas do funil','Acompanhamento e ajuste das abordagens'],
    note:'Envios e bases de dados devem respeitar LGPD, regras dos canais e limites contratados. Automação não garante geração de leads.'
  },
  {
    id:'geoaura', num:'04', title:'GeoAura', tag:'Presença e descoberta', icon: Globe2,
    subtitle:'Construa relevância para ser encontrado pelo mercado.',
    description:'Organize iniciativas de SEO, GEO e AEO para aumentar a clareza da presença digital da empresa e melhorar a capacidade de ser descoberta em mecanismos de busca e interfaces de IA.',
    benefits:['Diagnóstico de presença digital e oportunidades','Planejamento editorial alinhado ao posicionamento','Acompanhamento de indicadores de visibilidade'],
    steps:['Análise inicial de site, conteúdo e posicionamento','Priorização de temas e otimizações','Revisão contínua de métricas e execução'],
    note:'Resultados orgânicos dependem de concorrência, execução e tempo; não há garantia de rankings, citações ou tráfego.'
  }
];

export const method = [
  {no:'01',icon:SearchCheck,title:'Entenda seu momento',desc:'Faça um diagnóstico da maturidade da marca, do processo comercial e da operação.'},
  {no:'02',icon:SlidersHorizontal,title:'Estruture sua operação',desc:'Organize dados, clientes e rotinas com CRM, ERP e processos mais claros.'},
  {no:'03',icon:Sparkles,title:'Ganhe relevância',desc:'Aprenda posicionamento de marca e utilize ferramentas de aquisição e automação.'},
  {no:'04',icon:ChartNoAxesCombined,title:'Evolua com método',desc:'Acompanhe indicadores, corrija prioridades e avance para novas soluções conforme a necessidade.'},
];

export const plans = [
 {id:'essential',eyebrow:'PARA COMEÇAR COM ESTRUTURA',name:'Essential',price:'299',description:'Conhecimento, comunidade e base tecnológica para profissionalizar sua operação.',features:['Webinars em grupo com Alexandre Correa*','Comunidade empresarial e networking','CRM com recursos essenciais','ERP com recursos essenciais','Conteúdos, guias e encontros coletivos','Acesso a atualizações e materiais da comunidade'],button:'Quero fazer parte',featured:false},
 {id:'growth',eyebrow:'PARA CRESCER COM ACOMPANHAMENTO',name:'Growth',price:'999',description:'Tudo para unir posicionamento, ferramentas e decisões mais consistentes.',features:['Tudo que está no Essential','1 sessão estratégica individual por mês com especialista','Diagnóstico inicial e plano de ação','ChatBÔ com franquia definida','MestreLead com recursos e limites do plano','GeoAura com escopo de uso do plano','Acompanhamento periódico de indicadores'],button:'Quero acelerar minha empresa',featured:true},
 {id:'partner',eyebrow:'PARA EXECUÇÃO SOB MEDIDA',name:'Partner',price:null,description:'Uma estrutura especializada ao lado da sua empresa, com escopo e equipe definidos.',features:['Tudo que está no Growth','Profissionais dedicados conforme contrato','Gestão e acompanhamento estratégico','Integrações e automações personalizadas','Projetos de software sob escopo acordado','Rituais de gestão, metas e SLA negociados','Participações especiais sob disponibilidade'],button:'Solicitar uma proposta',featured:false}
];

export const faq = [
 {q:'O Mestres do Branding é um curso?',a:'Não. É uma proposta de comunidade empresarial recorrente, que combina encontros, tecnologia e acesso a soluções de gestão e crescimento. Os webinars são parte da experiência, não o produto inteiro.'},
 {q:'Vou falar diretamente com Alexandre Correa?',a:'A proposta prevê encontros coletivos e webinars conduzidos pelo Alexandre. A consultoria mensal individual do Growth é realizada por especialistas designados. Participações individuais do Alexandre, se oferecidas, dependem de disponibilidade e contratação específica.'},
 {q:'O CRM e o ERP estão incluídos no Essential?',a:'O Essential prevê acesso a versões essenciais de CRM e ERP. Módulos avançados, migração, integrações e customizações dependem do escopo contratado e da liberação operacional da plataforma.'},
 {q:'Posso usar ChatBÔ, MestreLead e GeoAura sem limites?',a:'Não. No Growth, as ferramentas funcionam com regras e franquias de utilização, que serão apresentadas antes da contratação. Consumo de IA, canais, envios, integrações e módulos adicionais podem ser cobrados separadamente.'},
 {q:'Qual é a diferença entre Growth e Partner?',a:'O Growth inclui uma sessão estratégica individual mensal e recursos definidos das ferramentas. O Partner é um contrato personalizado que pode incluir execução, profissionais dedicados e desenvolvimento específico, com preço, escopo e SLA próprios.'},
 {q:'Posso mudar de plano depois?',a:'A proposta comercial prevê possibilidade de upgrade, sujeito às condições contratuais. Alterações de escopo, cancelamento e carência serão informados antes da assinatura.'},
 {q:'As ferramentas garantem mais vendas?',a:'Não. A proposta busca melhorar processos, visibilidade e capacidade de execução. Resultados comerciais dependem de oferta, mercado, qualidade dos dados, implementação e atuação de cada empresa.'},
 {q:'Quando as ferramentas estarão disponíveis?',a:'Este site é um protótipo de apresentação. Funcionalidades, cronograma de ativação e condições finais serão formalizados antes de qualquer comercialização pública.'},
];
