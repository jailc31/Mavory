# Mavory Web — Compêndio da Autêntica Gastronomia Mundial

Projeto web finalizado com máxima fidelidade visual às **14 telas oficiais do Figma** (Desktop 1728 × 1117 px), construído em HTML5, CSS3 (Tailwind CSS estendido) e JavaScript moderno, sem dependências de frameworks pesados, 100% compatível com GitHub Pages e execução estática local (Live Server).

---

## 🎨 Identidade Visual Oficial

- **Bordô Principal:** `#722F37` / `#561922`
- **Creme / Fundo:** `#FFF8F6` / `#F7EFE2` / `#FFF1EC`
- **Dourado:** `#C49A54` / `#EDBF75`
- **Verde Terroir:** `#34483C` / `#CEE5D5`
- **Marrom Nobre:** `#302724`
- **Tipografia:** *Playfair Display* (títulos e editoriais) e *Plus Jakarta Sans* (textos e fichas técnicas)
- **Logo Oficial:** Monograma transparente refinado em `assets/images/logo.png`

---

## 🖥️ Mapeamento Completo das 14 Telas do Figma

| Tela Figma | Arquivo HTML | Descrição e Funcionalidades |
| :--- | :--- | :--- |
| **MacBook Pro 16_ - 1** | `pages/receitas.html` | Catálogo de receitas com busca em tempo real, chips de filtro, paginação e drawer fechado. |
| **MacBook Pro 16_ - 2** | `pages/inicio.html` | Início Autenticado com destaque de Kenji Sato, Geografia Sensorial (4 regiões) e Tendências. |
| **MacBook Pro 16_ - 3** | `pages/receita.html` | Detalhe completo: Shoyu Ramen com Chashu, cálculo dinâmico de porções, checklist de ingredientes e Modo Cozinhar com timer ativo. |
| **MacBook Pro 16_ - 4** | `pages/descobrir.html` | Atlas Gastronômico Autenticado com 4 banners de continentes e 5 pratos selecionados com filtros. |
| **MacBook Pro 16_ - 5** | `pages/compartilhar.html` | Compartilhar Autenticado: Formulário à esquerda + Prévia em tempo real à direita, câmera real e persistência local. |
| **MacBook Pro 16_ - 6** | `pages/perfil.html` | Perfil do usuário Caleb A: métricas dinâmicas, abas entre Pratos Compartilhados e Receitas Salvas, e modal de edição. |
| **MacBook Pro 16_ - 7** | `pages/compartilhar.html?mode=visitor` | Compartilhar Modo Visitante: Banner superior, card de bloqueio com login/cadastro e 4 inspirações recentes. |
| **MacBook Pro 16_ - 8** | `pages/descobrir.html?mode=visitor` | Cartografia Culinária Visitante: 6 Terroirs Primários com preparações canônicas e links diretos. |
| **MacBook Pro 16_ - 9** | `pages/comunidade.html` | Comunidade viva: Crônicas de cozinha (Camila, Lucas, Dadá e Rafael), leitor de crônica, modal de comentários e curtidas. |
| **MacBook Pro 16_ - 10** | `pages/login.html` | Tela de autenticação com email, senha com toggle de visibilidade e simulação de login salvando usuário. |
| **MacBook Pro 16_ - 11** | `pages/cadastro.html` | Cadastro Etapa 2 com prévia de upload de avatar, arroba `@helenarizzo` e contador de bio (240 caracteres). |
| **MacBook Pro 16_ - 12** | `pages/boas-vindas.html` | Boas-Vindas com gradiente dourado, selo de confirmação, 3 caixas de benefícios e distintivo de membro fundador. |
| **MacBook Pro 16_ - 13** | `pages/landing.html` | Início Visitante / Landing com colagem editorial de pães, 6 monogramas e Conselho Gastronômico. |
| **MacBook Pro 16_ - 14** | `pages/receitas.html` (com drawer aberto) | Ficha Técnica & Passos / Prévia Aberta: gaveta lateral direita interativa com porções, ingredientes e link para a receita. |

---

## 📷 Câmera Real do Dispositivo (`pages/compartilhar.html`)

A câmera foi implementada utilizando a API nativa do navegador `navigator.mediaDevices.getUserMedia`:
1. Clique em **"Fotografar com Câmera Real"** ou no ícone da câmera.
2. O modal abre em alta definição com enquadramento proporção 4:3.
3. Permita o acesso à câmera quando o navegador solicitar.
4. O stream de vídeo do dispositivo é exibido em tempo real.
5. Clique em **"Capturar Foto"**: o quadro atual é desenhado em um elemento `<canvas>` invisível e convertido em imagem.
6. A imagem capturada é exibida para aprovação, com opções de **"Usar esta foto"** ou **"Tirar Outra"**.
7. Ao confirmar, o formulário e a prévia editorial em tempo real são atualizados instantaneamente.
8. Ao clicar em **"Compartilhar Prato"**, a publicação é gravada no `localStorage` do navegador e passa a figurar automaticamente no seu Perfil (`pages/perfil.html`) e na Comunidade (`pages/comunidade.html`).
9. Tratamento de erros robusto: caso o dispositivo não possua câmera ou a permissão seja recusada, o usuário pode utilizar o botão alternativo **"Subir Arquivo"** para selecionar qualquer foto do disco.

---

## 💾 Persistência de Dados no Navegador (`localStorage`)

- `mavory_current_user`: Dados do usuário logado (nome, biografia, título e status).
- `mavory_favorites_v1`: Array com os identificadores das receitas salvas pelo usuário, sincronizado em todas as telas (botões de coração e marcador).
- `mavory_posts_v1`: Array com os novos pratos publicados pelo usuário na tela Compartilhar, renderizados dinamicamente na Comunidade e no Perfil.

---

## 🚀 Como Executar

### Opção 1: VS Code Live Server
1. Abra a pasta `mavory_vscode` no VS Code.
2. Clique com o botão direito em `index.html` e selecione **"Open with Live Server"**.
3. O projeto abrirá em `http://127.0.0.1:5500/index.html` com suporte completo a câmera e armazenamento local.

### Opção 2: GitHub Pages
Basta publicar o repositório no GitHub Pages. Todos os caminhos de assets e links foram criados de forma relativa (`pages/...`, `../assets/...`).
