# Mestres do Branding — Landing Page Premium

Protótipo de landing page **React + Vite**, em português brasileiro, com identidade preto/grafite/dourado, transições leves, seção de ferramentas, comunidade, consultoria, comparação de planos e jornada de conversão.

## 1. Rodar localmente

Requisitos: Node.js 20.19+ (ou 22+), npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Para gerar uma versão estática para hospedagem:

```bash
npm run build
npm run preview
```

O conteúdo para publicação é gerado em `dist/` e pode ser hospedado em Vercel, Netlify, Cloudflare Pages ou qualquer hospedagem estática. Framework não requer back-end.

## 2. Conteúdo da landing

- Hero com a fotografia do Alexandre, logo premium, promessa de valor e CTAs.
- Barra de pilares: branding, CRM e ERP, IA, vendas e comunidade.
- Dor do empresário e diferenciais do ecossistema.
- Posicionamento da participação do Alexandre (webinars coletivos, sujeito a formalização).
- Método de crescimento em quatro etapas.
- Showcase interativo dos produtos **CRM/ERP Tironi Tech, ChatBÔ, MestreLead e GeoAura**: aplicações práticas, benefícios, etapas de implantação e ressalvas.
- Acompanhamento Growth: diagnóstico, sessão individual mensal com especialista e plano de ação.
- Comunidade, networking e eventos.
- Planos Essential (R$ 299/mês), Growth (R$ 999/mês) e Partner (sob proposta).
- FAQ e CTA final, com modal de interesse por plano.

### Sobre as imagens

`public/assets/alexandre-portrait.webp` é o retrato enviado para a página, com o fundo de estúdio removido. Use apenas com a autorização de imagem e de participação necessária. O monograma recortado vem do logo aprovado na conversa. Essas imagens não são documentação fotográfica de contrato/parceria efetivos.

## 3. Conectar o canal de conversão

A página é só uma landing estática. **Ela não envia nem armazena leads no servidor**. Para preparar o contato, copie `.env.example` para `.env` e defina UM destes valores:

```dotenv
VITE_CONTACT_WHATSAPP=5511999999999
VITE_CONTACT_EMAIL=
```

Ao preencher e confirmar, a página abre o WhatsApp com mensagem pré-preenchida, que **o visitante ainda precisa enviar**. Se o número estiver vazio e o e-mail preenchido, abre o e-mail local. Se nenhum estiver configurado, copia a mensagem ou mostra um resumo selecionável. Não há mensagem de envio bem-sucedido sem envio real.

**Antes de colocar em produção**, recomendo integrar o formulário a um endpoint seguro no backend do CRM Tironi Tech (HTTPS, validação de entrada, captcha/rate limiting, consentimento, log de consentimento, políticas LGPD e opt-in dos canais). O front-end não deve conter tokens/segredos. Variáveis com prefixo `VITE_` são públicas após compilação.

### Eventos sugeridos para analytics

- `cta_hero_click` — clique no CTA principal;
- `pricing_plan_click` — plano selecionado;
- `lead_modal_open` — intenção iniciada;
- `lead_submit` — somente após confirmação do sistema de captação real;
- `faq_expand` — dúvidas exploradas;
- `tool_tab_view` — ferramenta explorada.

Esses eventos **não foram conectados** a uma plataforma de analytics para evitar coleta não autorizada. Implemente após definir política de cookies, consentimento e provedor de métricas.

## 4. Informações comerciais a validar antes de publicar

- Autorização de uso de imagem e formalização da participação de Alexandre Correa.
- Calendário, temas e periodicidade exatos dos webinars.
- Capacidades, escopo, prontidão, faturamento e franquias de cada ferramenta.
- Funcionalidades do CRM/ERP em cada plano, canais de IA, volume de uso, suporte, SLA e custos terceiros.
- Escopo da sessão mensal individual do Growth, agenda e profissional responsável.
- Política de contratação, cancelamento, atualizações, upgrade e suporte.
- Prestação de serviços e desenvolvimento no Partner, com proposta e contrato específicos.
- Política de Privacidade, Termos e canal de atendimento antes de entrar no ar.

O protótipo evita apresentar depoimentos inventados, números não verificados e promessas de resultado garantido. A participação e as ofertas são apresentadas como **proposta comercial em desenvolvimento**.

## 5. Estrutura

```
src/
  App.jsx                 # Página, seções, interações, modal
  index.css               # Sistema visual e responsividade
  data/content.js         # Textos e configurações editáveis
  main.jsx
public/
  assets/                 # Retrato, marca, imagem social
  favicon.svg
.env.example              # Configuração de canal de contato
```

Edite textos e listas em `src/data/content.js`. O design e a estrutura das seções estão em `src/App.jsx`. O sistema de cores, tipografia e breakpoints estão em `src/index.css`.
