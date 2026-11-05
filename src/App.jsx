import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck,
  BarChart3, CalendarDays, Check, CheckCircle2, ChevronDown, ChevronRight,
  ClipboardCheck, Crown, Fingerprint, Globe2, Layers3, LockKeyhole, Mail,
  Menu, MessageCircle, Play, ShieldCheck, Sparkles, Target, TrendingUp, Users,
  Video, WandSparkles, X
} from 'lucide-react';
import { strengths, method, toolData, plans, faq } from './data/content.js';

const ASSETS = '/assets/';

function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.11, rootMargin: '0px 0px -25px 0px' });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function IconButton({ children, icon: Icon = ArrowUpRight, kind = 'gold', onClick, className = '', ...rest }) {
  return (
    <button type="button" className={`btn btn-${kind} ${className}`} onClick={onClick} {...rest}>
      <span>{children}</span><Icon size={17} strokeWidth={1.75} aria-hidden="true" />
    </button>
  );
}

function Brand({ compact = false }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#inicio" aria-label="Mestres do Branding, voltar ao início">
    <img src={`${ASSETS}mb-mark.png`} alt="" className="brand-symbol" />
    <span className="brand-separator" aria-hidden="true" />
    <span className="brand-wordmark"><span>MESTRES DO</span><strong>BRANDING</strong></span>
  </a>;
}

function SectionHeading({ kicker, title, desc, center = false, light = false }) {
  return <div className={`section-heading ${center ? 'center' : ''} ${light ? 'light' : ''}`} data-reveal>
    {kicker && <div className="eyebrow eyebrow-section"><span className="eyebrow-line" />{kicker}</div>}
    <h2 className="serif">{title}</h2>
    {desc && <p>{desc}</p>}
  </div>;
}

function Header({ openContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler(); window.addEventListener('scroll', handler, { passive:true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  const navs = [['O ecossistema','#ecossistema'],['Como funciona','#metodo'],['Ferramentas','#ferramentas'],['Planos','#planos'],['Dúvidas','#faq']];
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-inner">
      <Brand compact />
      <nav aria-label="Navegação principal" className={`main-nav ${menuOpen ? 'open' : ''}`}>
        {navs.map(([n, href]) => <a key={n} href={href} onClick={() => setMenuOpen(false)}>{n}</a>)}
        <button className="mobile-nav-cta" onClick={() => {setMenuOpen(false); openContact('growth')}}>Fazer parte da comunidade <ArrowUpRight size={16}/></button>
      </nav>
      <button className="nav-cta" onClick={() => openContact('growth')}>Entrar na comunidade <ArrowUpRight size={15}/></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(s => !s)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}

function Hero({ openContact }) {
  return <section id="inicio" className="hero">
    <div className="hero-noise" />
    <div className="hero-halo hero-halo-one" aria-hidden="true" />
    <div className="hero-halo hero-halo-two" aria-hidden="true" />
    <div className="hero-gold-curve" aria-hidden="true" />
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow"><span className="eyebrow-point"/> O NOVO ECOSSISTEMA DE CRESCIMENTO EMPRESARIAL</div>
        <h1 className="serif">Uma marca forte.<br/>Uma empresa <em>mais preparada</em> para crescer.</h1>
        <p className="hero-lead">Posicionamento de marca, tecnologia, inteligência artificial e acompanhamento estratégico. Tudo conectado para você evoluir seu negócio.</p>
        <div className="hero-actions">
          <IconButton onClick={() => openContact('growth')} icon={ArrowRight}>Quero fazer parte</IconButton>
          <a className="quiet-link" href="#ecossistema"><span className="circle-arrow"><ArrowDown size={16}/></span> Conheça o ecossistema</a>
        </div>
        <div className="hero-aside"><span className="hero-aside-icon"><Check size={14}/></span><span>Planos a partir de <strong>R$ 299/mês</strong> · para diferentes momentos do negócio</span></div>
      </div>
      <div className="hero-person">
        <div className="person-crown-arc" aria-hidden="true" />
        <div className="person-initial" aria-hidden="true">M</div>
        <img className="person-photo" src={`${ASSETS}alexandre-portrait.webp`} alt="Retrato conceitual de Alexandre Correa em traje executivo, de braços cruzados" fetchPriority="high" />
        <div className="person-identity"><span className="person-overline">EXPERIÊNCIA EM MARCAS E POSICIONAMENTO</span><strong>Alexandre Correa</strong><span>Encontros e visão empresarial*</span></div>
      </div>
    </div>
    <div className="hero-floor" />
  </section>;
}

function StrengthBar() {
  return <div className="strengths-wrapper"><div className="container strengths-row">
    {strengths.map(({icon:Icon,text}) => <div className="strength-item" key={text}><Icon size={21} strokeWidth={1.5}/><span>{text}</span></div>)}
  </div></div>;
}

function ProblemSection({openContact}) {
  return <section id="ecossistema" className="section challenge-section section-gridlines">
    <div className="container">
      <div className="challenge-top">
        <SectionHeading kicker="O JEITO DE CRESCER MUDOU" title={<>Não basta aparecer.<br/><span className="gold-gradient-text">É preciso estar preparado.</span></>} desc="Uma marca memorável abre portas. Mas é a operação, a tecnologia e a capacidade de execução que transformam essa oportunidade em um negócio sustentável." />
        <div className="challenge-intro" data-reveal><span className="small-index">01 / A IDEIA</span><p>Reunimos o que o empresário costuma buscar em lugares diferentes: visão de marca, ferramentas de gestão, automação e orientação aplicada.</p><a href="#metodo" className="text-link">Entenda o método <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="pillar-grid">
        <div className="pillar-card" data-reveal><div className="pillar-number">01</div><div className="pillar-icon"><Crown size={25}/></div><h3 className="serif">Marcas que inspiram confiança.</h3><p>Aprenda princípios de posicionamento, construção de imagem e percepção de valor para se diferenciar.</p><span className="pillar-bottom">BRANDING & REPUTAÇÃO <ArrowUpRight size={16}/></span></div>
        <div className="pillar-card" data-reveal><div className="pillar-number">02</div><div className="pillar-icon"><Layers3 size={25}/></div><h3 className="serif">Operações que funcionam.</h3><p>Profissionalize a gestão comercial e administrativa com processos, informações e sistemas conectados.</p><span className="pillar-bottom">TECNOLOGIA & GESTÃO <ArrowUpRight size={16}/></span></div>
        <div className="pillar-card" data-reveal><div className="pillar-number">03</div><div className="pillar-icon"><TrendingUp size={25}/></div><h3 className="serif">Decisões que geram avanço.</h3><p>Encontre prioridades e evolua com ferramentas digitais, acompanhamento e uma comunidade de negócios.</p><span className="pillar-bottom">CRESCIMENTO & EXECUÇÃO <ArrowUpRight size={16}/></span></div>
      </div>
      <div className="ecosystem-note" data-reveal><div><Sparkles size={19}/> <strong>Mais do que acesso a conteúdo.</strong> Um ambiente para estruturar, operar e evoluir sua empresa.</div><button onClick={() => openContact('essential')}>Conhecer a comunidade <ArrowRight size={17}/></button></div>
    </div>
  </section>;
}

function AuthoritySection({openContact}) {
  return <section id="alexandre" className="section authority-section">
    <div className="container authority-layout">
      <div className="authority-photo-side" data-reveal>
        <div className="authority-image-frame"><div className="authority-photo-glow"/><img src={`${ASSETS}alexandre-portrait.webp`} alt="Retrato conceitual de Alexandre Correa" loading="lazy"/></div>
        <div className="authority-quote"><span>“</span><p>Uma marca forte é construída com estratégia, consistência e posicionamento.</p><small>PRINCÍPIO DA COMUNIDADE</small></div>
      </div>
      <div className="authority-content" data-reveal>
        <div className="eyebrow eyebrow-section"><span className="eyebrow-line"/> A VISÃO POR TRÁS DA MARCA</div>
        <h2 className="serif">Experiência que vira <em>conhecimento aplicado.</em></h2>
        <p className="authority-lead">O diferencial da comunidade está em aproximar quem empreende de discussões práticas sobre imagem, construção de marca, posicionamento e desenvolvimento de negócios.</p>
        <div className="alexandre-bio"><div className="gold-mini-line"/><div><span className="small-index">ENCONTROS COM</span><h3 className="serif">Alexandre Correa</h3><p>Trajetória empresarial ligada à gestão de marcas, licenciamento e posicionamento. Na proposta do Mestres, a participação acontece por meio de webinars e encontros coletivos, com temas aplicáveis à realidade empresarial.</p></div></div>
        <div className="authority-topics"><span><CheckCircle2 size={17}/> Estratégia de imagem</span><span><CheckCircle2 size={17}/> Construção de marca</span><span><CheckCircle2 size={17}/> Posicionamento</span><span><CheckCircle2 size={17}/> Visão empresarial</span></div>
        <IconButton kind="outline" onClick={() => openContact('essential')}>Quero participar dos encontros</IconButton>
        <p className="fineprint">* Participação, calendário e uso público de imagem sujeitos à formalização da parceria.</p>
      </div>
    </div>
  </section>;
}

function MethodSection() {
  return <section id="metodo" className="section method-section">
    <div className="container">
      <SectionHeading kicker="CONHECIMENTO + FERRAMENTAS + ACOMPANHAMENTO" title={<>Um caminho mais claro<br/>para <em>evoluir seu negócio.</em></>} desc="O método conecta marca e operação. Cada etapa ajuda você a sair das decisões soltas e construir uma rotina de crescimento com mais direção." center />
      <div className="method-grid">
        {method.map(({no,icon:Icon,title,desc},i) => <div className="method-card" key={no} data-reveal>
          <span className="method-no">{no}</span><div className="method-icon"><Icon size={27} strokeWidth={1.35}/></div><h3>{title}</h3><p>{desc}</p>{i < 3 && <span className="method-connector"/>}
        </div>)}
      </div>
    </div>
  </section>;
}

const dashboardConfigs = {
 crm: {overline:'GESTÃO EM UM SÓ LUGAR',title:'Visão comercial',chips:['Pipeline','Contatos','Atividades'],columns:[{title:'Novo contato',color:'#d8b57f',items:['Mapear necessidade','Primeiro atendimento']},{title:'Em negociação',color:'#cda169',items:['Diagnóstico comercial','Apresentação de proposta']},{title:'Em acompanhamento',color:'#d4c4a0',items:['Próxima reunião','Revisão de indicadores']}]},
 chatbo:{overline:'ATENDIMENTO INTELIGENTE',title:'Central de conversas',chips:['Canais','Fluxos','Histórico'],columns:[{title:'Nova conversa',color:'#d8b57f',items:['Contato recebido','Identificar intenção']},{title:'Atendimento com IA',color:'#cda169',items:['Responder dúvidas','Consultar conhecimento']},{title:'Equipe humana',color:'#d4c4a0',items:['Transferir contexto','Concluir atendimento']}]},
 mestrelead:{overline:'PROCESSO DE PROSPECÇÃO',title:'Jornada comercial',chips:['Contatos','Cadências','Oportunidades'],columns:[{title:'Qualificar',color:'#d8b57f',items:['Definir perfil ideal','Validar permissões']},{title:'Abordar',color:'#cda169',items:['Personalizar mensagem','Programar tarefas']},{title:'Acompanhar',color:'#d4c4a0',items:['Registrar respostas','Evoluir negociação']}]},
 geoaura:{overline:'PRESENÇA DIGITAL',title:'Plano de visibilidade',chips:['SEO','GEO','AEO'],columns:[{title:'Diagnosticar',color:'#d8b57f',items:['Mapear páginas','Identificar oportunidades']},{title:'Otimizar',color:'#cda169',items:['Conteúdo relevante','Estrutura e entidades']},{title:'Monitorar',color:'#d4c4a0',items:['Acompanhar buscas','Revisar prioridades']}]},
};
function DashboardMock({toolId}) {
  const d = dashboardConfigs[toolId];
  return <div className="dashboard-shell" key={toolId}>
    <div className="dashboard-top"><span className="dashboard-dots"><i/><i/><i/></span><span>VISÃO ILUSTRATIVA · MESTRES OS</span><span className="dashboard-top-symbol">MB</span></div>
    <div className="dashboard-content"><div className="dashboard-head"><div><span>{d.overline}</span><strong>{d.title}</strong></div><div className="dash-avatar"><Layers3 size={18}/></div></div><div className="dashboard-chips">{d.chips.map(x => <span key={x}>{x}</span>)}</div><div className="dashboard-kanban">{d.columns.map(col => <div className="kanban-col" key={col.title}><div className="kanban-title"><i style={{background:col.color}}/>{col.title}</div>{col.items.map((item,i)=><div key={item} className="kanban-ticket"><span>{item}</span><div className="ticket-bars"><b style={{width:`${67-i*17}%`}}/><b style={{width:`${42+i*11}%`}}/></div></div>)}</div>)}</div><div className="dashboard-footer"><span><span className="status-dot"/>Exemplo de fluxo de trabalho</span><span>Estrutura • Clareza • Ação</span></div></div>
  </div>;
}

function ToolsSection({openContact}) {
  const [active, setActive] = useState('crm');
  const tool = toolData.find(t => t.id === active);
  return <section id="ferramentas" className="section tools-section">
    <div className="container">
      <div className="tools-section-header"><SectionHeading kicker="A TECNOLOGIA POR TRÁS DO CRESCIMENTO" title={<>Menos ferramentas soltas.<br/><em>Mais negócio acontecendo.</em></>} desc="Um ecossistema de soluções desenhadas para ajudar sua empresa a organizar processos, se relacionar com clientes e encontrar oportunidades de evolução."/><div className="tools-side-caption" data-reveal>CONHEÇA O QUE FAZ PARTE DA PROPOSTA <ArrowDownRight size={22}/></div></div>
      <div className="tool-switcher" role="tablist" aria-label="Selecione uma solução">
        {toolData.map(t => { const Icon=t.icon; return <button role="tab" id={`tab-${t.id}`} aria-selected={t.id===active} aria-controls="tool-panel" className={`tool-tab ${t.id===active ? 'active':''}`} key={t.id} onClick={()=>setActive(t.id)}><Icon size={19}/><span>{t.title}</span><small>{t.tag}</small></button>})}
      </div>
      <div className="tool-detail" role="tabpanel" id="tool-panel" aria-labelledby={`tab-${active}`}>
        <div className="tool-copy" key={tool.id}>
          <span className="tool-index">SOLUÇÃO / {tool.num}</span>
          <h3 className="serif">{tool.subtitle}</h3>
          <p className="tool-description">{tool.description}</p>
          <div className="tool-subheading">O QUE SUA EMPRESA GANHA</div>
          <ul className="tool-checklist">{tool.benefits.map(b=><li key={b}><Check size={16}/>{b}</li>)}</ul>
          <div className="tool-subheading tool-subheading-secondary">COMO FUNCIONA A IMPLANTAÇÃO</div>
          <ol className="tool-steps">{tool.steps.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span>{step}</li>)}</ol>
          <p className="tool-note"><ShieldCheck size={16}/>{tool.note}</p>
          <button className="text-link tool-link" onClick={()=>openContact('growth')}>Conhecer as condições do Growth <ArrowUpRight size={17}/></button>
        </div>
        <div className="tool-dashboard-side"><div className="panel-back-glow"/><DashboardMock toolId={active}/><span className="panel-legend"><span className="tiny-gold-diamond"/> Interfaces demonstrativas; funcionalidades e integrações estão sujeitas ao produto e ao plano contratado.</span></div>
      </div>
    </div>
  </section>;
}

function GuidanceSection({openContact}) {
  return <section id="acompanhamento" className="section guidance-section">
    <div className="container guidance-layout">
      <div className="guidance-copy">
        <SectionHeading kicker="TECNOLOGIA COM DIREÇÃO" title={<>Não é só ter ferramentas.<br/><em>É saber o próximo passo.</em></>} desc="Para empresas que precisam de apoio nas decisões, a proposta inclui diagnóstico, prioridades claras e sessões com especialistas para transformar informação em ação."/>
        <div className="guidance-entries" data-reveal>
          <div><div className="guide-icon"><Target size={21}/></div><div><h3>Diagnóstico do negócio</h3><p>Mapeamento de oportunidades em marca, aquisição, vendas, processos e tecnologia.</p></div></div>
          <div><div className="guide-icon"><CalendarDays size={21}/></div><div><h3>Acompanhamento mensal</h3><p>No Growth, uma sessão individual por mês com especialista, com revisão das prioridades e plano de ação.</p></div></div>
          <div><div className="guide-icon"><ShieldCheck size={21}/></div><div><h3>Execução quando necessário</h3><p>No Partner, especialistas e desenvolvimento podem atuar diretamente em projetos com escopo e SLAs negociados.</p></div></div>
        </div>
        <IconButton kind="outline" onClick={()=>openContact('growth')}>Quero um plano de crescimento</IconButton>
      </div>
      <div className="guidance-art" data-reveal>
        <div className="guidance-corner-label">MESTRES / ESTRATÉGIA</div>
        <div className="strategy-board">
          <div className="strategy-head"><div className="strategy-head-small">RITUAL DE ACOMPANHAMENTO</div><div className="strategy-head-title">Da análise à execução<span>↗</span></div></div>
          <div className="strategy-row"><span className="sr-index">01</span><div><strong>Diagnóstico</strong><small>Entender o cenário e os gargalos</small></div><span className="strategy-check"><Check size={15}/></span></div>
          <div className="strategy-row"><span className="sr-index">02</span><div><strong>Prioridades</strong><small>Definir impacto, responsáveis e próximos passos</small></div><span className="strategy-check"><Check size={15}/></span></div>
          <div className="strategy-row"><span className="sr-index">03</span><div><strong>Acompanhamento</strong><small>Revisar o que avançou e o que ajustar</small></div><span className="strategy-check"><Check size={15}/></span></div>
          <div className="strategy-foot"><span><span className="pulse-dot"/> Ciclo contínuo</span><span>Método & clareza</span></div>
        </div>
        <div className="guidance-float-card"><span><Sparkles size={20}/></span><div><strong>Apoio humano + ferramentas</strong><small>Um caminho de evolução, não mais um software isolado.</small></div></div>
      </div>
    </div>
  </section>;
}

function CommunitySection({openContact}) {
  return <section id="comunidade" className="section community-section">
    <div className="container community-layout">
      <div className="community-lead" data-reveal><span className="eyebrow eyebrow-section"><span className="eyebrow-line"/> VOCÊ NÃO PRECISA CAMINHAR SOZINHO</span><h2 className="serif">Sua empresa cresce.<br/><em>Sua visão também.</em></h2><p>Networking com empresários, encontros práticos e trocas de experiências para ampliar repertório, construir relações e encontrar soluções.</p><IconButton kind="outline" onClick={()=>openContact('essential')}>Entrar na comunidade</IconButton></div>
      <div className="community-grid" data-reveal><div><Video size={27}/><h3>Webinars ao vivo</h3><p>Encontros coletivos de marca, posicionamento e visão empresarial.</p></div><div><Users size={27}/><h3>Networking relevante</h3><p>Conexão entre negócios que compartilham desafios e experiências.</p></div><div><ClipboardCheck size={27}/><h3>Conteúdo aplicável</h3><p>Guias, materiais e discussões orientadas para a prática.</p></div><div><TrendingUp size={27}/><h3>Uma jornada contínua</h3><p>O próximo nível de apoio conforme sua empresa evolui.</p></div></div>
    </div>
  </section>;
}

function PlansSection({openContact}) {
 return <section id="planos" className="section plans-section">
  <div className="container">
    <SectionHeading kicker="INVISTA NO PRÓXIMO NÍVEL" title={<>Uma solução para cada<br/><em>momento da sua empresa.</em></>} desc="Comece com estrutura, avance com acompanhamento ou conte com uma atuação mais dedicada. Escolha o nível de suporte adequado ao seu estágio." center />
    <div className="plans-grid">
      {plans.map(plan => <article key={plan.id} className={`pricing-card ${plan.featured ? 'featured':''}`} data-reveal>
        {plan.featured && <div className="plan-featured-label"><Sparkles size={13}/> ESCOLHA EM DESTAQUE</div>}
        <div className="pricing-content"><div className="plan-eyebrow">{plan.eyebrow}</div><div className="pricing-name serif">{plan.name}</div><p className="plan-desc">{plan.description}</p><div className="price-display">{plan.price ? <><span className="currency">R$</span><strong>{plan.price}</strong><span className="price-period">/mês</span></> : <span className="price-custom">Sob proposta</span>}</div><div className="price-divider"/><p className="include-label">O QUE ESTÁ INCLUÍDO</p><ul className="pricing-list">{plan.features.map(f=><li key={f}><Check size={16}/><span>{f}</span></li>)}</ul></div>
        <IconButton kind={plan.featured ? 'gold':'outline'} icon={ArrowRight} onClick={()=>openContact(plan.id)} className="plan-button">{plan.button}</IconButton>
      </article>)}
    </div>
    <div className="pricing-disclaimer" data-reveal><LockKeyhole size={17}/><p>Valores mensais de referência do conceito comercial. Franquias, canais habilitados, custos de terceiros, cronograma de disponibilização, contrato e condições finais deverão ser definidos antes da comercialização. Planos não incluem trabalho ilimitado.</p></div>
  </div>
 </section>;
}

function FAQSection({openContact}) {
 const [open,setOpen]=useState(0);
 return <section id="faq" className="section faq-section"><div className="container faq-layout">
   <div className="faq-left"><SectionHeading kicker="SEM LETRAS MIÚDAS" title={<>Dúvidas<br/><em>frequentes.</em></>} desc="Tudo o que você precisa saber para entender como o ecossistema funciona e qual plano faz sentido para sua empresa."/><div className="faq-support">Ainda quer entender a proposta? <button onClick={()=>openContact('partner')}>Fale com a equipe <ArrowUpRight size={15}/></button></div></div>
   <div className="faq-items" data-reveal>{faq.map(({q,a},i)=><div className={`faq-item ${open===i?'active':''}`} key={q}><button type="button" aria-expanded={open===i} aria-controls={`faq-answer-${i}`} onClick={()=>setOpen(v=>v===i?-1:i)}><span>{q}</span><ChevronDown size={19}/></button><div id={`faq-answer-${i}`} className="faq-answer" hidden={open!==i}><p>{a}</p></div></div>)}</div>
  </div></section>;
}

function FinalCTA({openContact}) {
 return <section className="cta-section"><div className="cta-pattern"/><div className="container cta-inner" data-reveal><div className="eyebrow eyebrow-section"><span className="eyebrow-line"/> O PRÓXIMO CAPÍTULO DA SUA EMPRESA</div><h2 className="serif">Uma marca mais forte.<br/><em>Um negócio mais preparado.</em></h2><p>Conhecimento, comunidade e tecnologia conectados em uma experiência feita para empresários que querem construir algo maior.</p><IconButton onClick={()=>openContact('growth')} icon={ArrowUpRight}>Quero conhecer os planos</IconButton><small>Uma proposta de ecossistema de crescimento — sem promessas de resultados garantidos.</small></div></section>;
}

function Footer({openContact}) {
 return <footer className="footer"><div className="container"><div className="footer-main"><div><Brand/><p>Uma proposta de ecossistema que conecta marca, tecnologia e crescimento empresarial.</p></div><div className="footer-links"><strong>EXPLORAR</strong><a href="#ecossistema">O ecossistema</a><a href="#ferramentas">Ferramentas</a><a href="#acompanhamento">Acompanhamento</a><a href="#planos">Planos</a></div><div className="footer-links"><strong>VAMOS CONVERSAR?</strong><span>Conheça as condições da comunidade e do atendimento.</span><button onClick={()=>openContact('partner')}>Solicitar contato <ArrowUpRight size={16}/></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mestres do Branding · Conceito de apresentação por Tironi Tech.</span><span>Protótipo comercial. Participação de Alexandre Correa e ofertas sujeitas à formalização.</span></div></div></footer>;
}

function ContactModal({plan,close}) {
 const selected = plans.find(p=>p.id===plan) || plans[1];
 const [form,setForm]=useState({name:'',company:'',email:'',phone:'',goal:'',consent:false});
 const [status,setStatus]=useState('');
 const [sentVia,setSentVia]=useState('');
 const phone = String(import.meta.env.VITE_CONTACT_WHATSAPP || '').replace(/\D/g,'');
 const email = String(import.meta.env.VITE_CONTACT_EMAIL || '').trim();
 useEffect(()=>{
   const old=document.body.style.overflow;document.body.style.overflow='hidden';
   const onKey=(ev)=>{if(ev.key==='Escape')close();};window.addEventListener('keydown',onKey);
   return ()=>{document.body.style.overflow=old;window.removeEventListener('keydown',onKey);};
 },[close]);
 const msg=useMemo(()=>`Olá! Tenho interesse no Mestres do Branding.\nPlano: ${selected.name}\nNome: ${form.name}\nEmpresa: ${form.company}\nE-mail: ${form.email}\nTelefone: ${form.phone}\nObjetivo: ${form.goal || 'Gostaria de conhecer melhor a proposta.'}`,[selected.name,form]);
 const change=(field)=>(e)=>setForm(v=>({...v,[field]:field==='consent'?e.target.checked:e.target.value}));
 const submit=async(e)=>{
   e.preventDefault();setStatus('');setSentVia('');
   if(!form.consent) {setStatus('Confirme a autorização para preparar sua solicitação.');return;}
   if(phone.length>=10 && phone.length<=15){setSentVia('whatsapp');window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');return;}
   if(email.includes('@')){setSentVia('email');window.location.href=`mailto:${email}?subject=${encodeURIComponent('Interesse Mestres do Branding — '+selected.name)}&body=${encodeURIComponent(msg)}`;return;}
   try {await navigator.clipboard.writeText(msg);setSentVia('copied');}catch {setSentVia('manual');}
 };
 return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}>
  <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button className="modal-close" onClick={close} aria-label="Fechar formulário"><X size={21}/></button>
   <div className="modal-topline">MESTRES DO BRANDING <span>◆</span> SOLICITAÇÃO COMERCIAL</div><h2 id="contact-title" className="serif">Vamos conversar sobre <em>seu próximo passo.</em></h2><p>Você selecionou <strong>{selected.name}</strong>{selected.price?` · R$ ${selected.price}/mês`: ' · sob proposta'}. Preencha os dados e gere sua mensagem de interesse.</p>
   <form onSubmit={submit} className="lead-form">
    <div className="form-grid"><label>Seu nome<input value={form.name} onChange={change('name')} required maxLength={90} placeholder="Como podemos chamar você?"/></label><label>Empresa<input value={form.company} onChange={change('company')} required maxLength={100} placeholder="Nome do negócio"/></label><label>E-mail<input type="email" value={form.email} onChange={change('email')} required maxLength={120} placeholder="seu@email.com"/></label><label>WhatsApp<input type="tel" value={form.phone} onChange={change('phone')} required minLength={8} maxLength={25} placeholder="(00) 00000-0000"/></label></div>
    <label>Seu principal objetivo<textarea value={form.goal} onChange={change('goal')} maxLength={800} rows={3} placeholder="Quero estruturar meu comercial, melhorar meu posicionamento..."/></label>
    <label className="consent-line"><input type="checkbox" checked={form.consent} onChange={change('consent')} required/><span>Autorizo a preparação desta solicitação com os dados informados. Entendo que este protótipo não armazena meus dados nem envia formulários para um servidor.</span></label>
    {status && <p className="modal-status" role="alert">{status}</p>}
    <button className="btn btn-gold submit-btn" type="submit"><span>{phone?'Abrir conversa no WhatsApp':email?'Preparar e-mail de contato':'Gerar mensagem de interesse'}</span><ArrowRight size={17}/></button>
    {sentVia==='copied' && <p className="modal-status success" role="status">Mensagem copiada. O canal comercial ainda não foi configurado; envie o texto ao contato da empresa.</p>}
    {sentVia==='manual' && <div className="manual-msg"><p>Copie a mensagem abaixo para encaminhar à empresa:</p><textarea readOnly value={msg}/></div>}
    {(sentVia==='whatsapp' || sentVia==='email')&&<p className="modal-status success" role="status">Abrimos seu aplicativo de contato. A mensagem só será enviada quando você confirmar por lá.</p>}
    <div className="modal-privacy"><LockKeyhole size={14}/><span>Sem backend nesta versão. Para captura automática de leads, integre este formulário ao CRM antes de publicar.</span></div>
   </form>
  </div>
 </div>;
}

export default function App(){
 const [plan,setPlan]=useState(null);
 useReveal();
 return <>
  <Header openContact={setPlan}/>
  <main><Hero openContact={setPlan}/><StrengthBar/><ProblemSection openContact={setPlan}/><AuthoritySection openContact={setPlan}/><MethodSection/><ToolsSection openContact={setPlan}/><GuidanceSection openContact={setPlan}/><CommunitySection openContact={setPlan}/><PlansSection openContact={setPlan}/><FAQSection openContact={setPlan}/><FinalCTA openContact={setPlan}/></main>
  <Footer openContact={setPlan}/>
  {plan && <ContactModal key={plan} plan={plan} close={()=>setPlan(null)}/>} 
  <button className="mobile-sticky" onClick={()=>setPlan('growth')}>Conhecer os planos <ArrowRight size={18}/></button>
 </>;
}
