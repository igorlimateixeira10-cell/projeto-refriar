# Refriar — Refrigeração & Assistência Técnica

Site institucional profissional desenvolvido para a Refrigeração Refriar Eletromecânicas, empresa de assistência técnica em refrigeração.

## Sobre o projeto

O objetivo do site é apresentar a empresa e seus serviços, e converter visitantes em pedidos de orçamento através de um formulário que gera automaticamente uma mensagem para envio via WhatsApp — sem depender de redes sociais para o primeiro contato.

## Principais funcionalidades

- Página única com seções de início, sobre a empresa e serviços oferecidos.
- Carrossel de imagens na página inicial.
- Formulário de orçamento: o visitante preenche nome, telefone, serviço de interesse e detalhes, e o site monta automaticamente uma mensagem formatada e abre o WhatsApp da empresa com o texto pronto para envio.
- Botão de contato direto via WhatsApp no menu superior.
- Web manifest configurado (nome, ícone e cor do app).

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Design e responsividade

O CSS define breakpoints em `768px` e `1024px` (abordagem mobile-first), ajustando o layout entre celular, tablet e desktop. Não foi feito teste em dispositivos físicos como parte deste projeto.

## Deploy

Site publicado em: https://projeto-refriar.vercel.app

## Desenvolvimento

Projeto estático, sem framework ou build step: HTML, CSS e JavaScript servidos diretamente. O envio do formulário de orçamento é feito em JavaScript puro, montando a URL do WhatsApp (`wa.me`) com a mensagem do cliente já preenchida.

---

## English

# Refriar — Refrigeration & Technical Support

A professional institutional website built for Refrigeração Refriar Eletromecânicas, a refrigeration technical support company.

### About the project

The goal of the site is to present the company and its services, and convert visitors into quote requests through a form that automatically generates a message to be sent via WhatsApp — without depending on social media for the first contact.

### Key features

- Single-page site with home, about and services sections.
- Image carousel on the homepage.
- Quote request form: the visitor fills in name, phone, service of interest and details, and the site automatically builds a formatted message and opens the company's WhatsApp with the text ready to send.
- Direct WhatsApp contact button in the top menu.
- Web manifest configured (app name, icon and theme color).

### Technologies

- HTML5
- CSS3
- Vanilla JavaScript

### Design and responsiveness

The CSS defines breakpoints at `768px` and `1024px` (mobile-first approach), adapting the layout across phone, tablet and desktop. No testing was performed on physical devices as part of this project.

### Live site

https://projeto-refriar.vercel.app
