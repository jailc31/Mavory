// Mavory - JavaScript principal
// Mantido simples para facilitar a leitura e a apresentação do projeto.

const receitas = {
  ramen: {
    nome: 'Ramen Tonkotsu Ancestral', pais: 'Fukuoka, Japão', dificuldade: 'Difícil', tempo: '12h', porcoes: 4,
    imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNfoMjwlOAeXyB8aB_S0lwckRT5sLxtdHfnApN-9u2-Yjp9rlHTMBe4ADI3_7lU3jb9cxVrDlPxRIMtJeviE1ysHRrue78nC9uWo2kl2pgiydM_OJDFCJvyBkO7Zlui1oKpDkesfFhyDEV-kf2G6T-23lsrKgRkx3uQc935qkgtl74SQ75LyXzbC5XWJ6uwulCdXzkE2USQxBy80yTpmOuqmxE5-B3dhD0KvYcaPen9H5uNCBSs3fcOg',
    descricao: 'Caldo rico e cremoso, macarrão fresco e coberturas clássicas da tradição de Fukuoka.',
    ingredientes: ['1 kg de ossos de porco', '500 g de macarrão para ramen', '400 g de barriga de porco', '4 ovos', '100 ml de shoyu', '60 ml de mirin', '2 dentes de alho', 'Cebolinha, nori e menma a gosto'],
    preparo: ['Ferva os ossos por alguns minutos, descarte a primeira água e lave os ossos.', 'Cozinhe os ossos em água limpa em fogo alto por várias horas, mantendo o caldo quente e mexendo de vez em quando.', 'Prepare o chashu: doure a barriga de porco e cozinhe com shoyu, mirin, alho e água até ficar macia.', 'Cozinhe os ovos por cerca de 6 minutos e resfrie em água gelada. Depois, deixe-os na marinada do chashu.', 'Cozinhe o macarrão separadamente, coloque o caldo quente na tigela e monte com chashu, ovo, nori, menma e cebolinha.']
  },
  cacio: {
    nome: 'Cacio e Pepe Clássico', pais: 'Roma, Itália', dificuldade: 'Média', tempo: '25 min', porcoes: 2,
    imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCre8gtkkXDXwstGOOjgXgnSCKa68YJqnAzpARlkdfPsVWnhsuGybmxYHceT15zzMcWUco8lY1qM9GUhtfW06W5-rA3Vj5jYagCj_gVZ7rdR6BWMn6cn-wY9Z9584op1bLQJPiyyBzq-iyKEthIB9cmDE4bNXKlCTXYY1gZ8EZBIe3w1cTPdyeChp8pnxR4vHD6NLK3ZAGN7iKLmYofyveNphmEut9sW-71_2uBSR9aQhS6OGyRJX0bjw',
    descricao: 'Massa romana feita com poucos ingredientes: pecorino romano, pimenta-do-reino e água do cozimento.',
    ingredientes: ['200 g de spaghetti ou tonnarelli', '80 g de Pecorino Romano ralado fino', '2 colheres de chá de pimenta-do-reino preta', 'Sal para a água da massa'],
    preparo: ['Cozinhe a massa em água salgada até ficar al dente e reserve bastante água do cozimento.', 'Toste a pimenta em uma frigideira seca por alguns segundos.', 'Misture o Pecorino com pequenas quantidades da água da massa até formar um creme.', 'Junte a massa à frigideira e desligue o fogo. Acrescente o creme de queijo aos poucos, mexendo até ficar brilhante e cremoso.', 'Sirva imediatamente com mais Pecorino e pimenta.']
  },
  boeuf: {
    nome: 'Boeuf Bourguignon de Vinhedo', pais: 'Borgonha, França', dificuldade: 'Média', tempo: '3h30', porcoes: 4,
    imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBpm6xONwbqNVYTtFFy5DLOAlRHxHnOQuLoBZxLkIER1oMOt5KREf53RPbwJMBG7eHbFpsC1NSq-xS3aQ5pfmiXGZlLY4WJeKtQdU0qcebBkEhFb6DmP9EbMbGTrstrYgFGNHLV2teTY8VLYpRwrDEvPiWMNP3rokTRHMI6H6PlK55Dq6uTLUCsX42nsnJg2gOfqluSmUBdUYq9F37jF0qLuvPEh-ULFhKvWMuetE__xUq02ye1mf6fw',
    descricao: 'Ensopado francês de carne bovina cozida lentamente com vinho tinto, legumes e ervas.',
    ingredientes: ['800 g de acém ou paleta bovina em cubos', '750 ml de vinho tinto seco', '100 g de bacon', '200 g de cogumelos', '2 cenouras', '1 cebola', '2 dentes de alho', '1 colher de sopa de farinha', '1 folha de louro e tomilho', 'Sal e pimenta'],
    preparo: ['Marine a carne no vinho com cenoura, cebola e ervas por algumas horas, se tiver tempo.', 'Seque a carne e doure os cubos em etapas. Reserve.', 'Doure o bacon e refogue os legumes. Volte a carne para a panela e polvilhe a farinha.', 'Adicione o vinho e um pouco de caldo. Cozinhe tampado em fogo baixo por cerca de 2 horas e meia, até a carne ficar macia.', 'Doure os cogumelos separadamente, junte ao ensopado no final e ajuste sal e pimenta.']
  },
  ceviche: {
    nome: 'Ceviche Costeiro Tradicional', pais: 'Lima, Peru', dificuldade: 'Fácil', tempo: '30 min', porcoes: 2,
    imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUaCws4hMtVSS4EIvNP2TTmvZnrgH9zeMq9tgofBKOheSHNHjiBNYENmZPvcAKyPaTmEwuAbNEpcTs7n9fEvAi4Pib3_hwRj_Xs6HgAn7Gew5SK-IN4LY5z-e8lcgznPW8BR8DDS6rRsgDcuGYemWAYj1WGqhqW9uAWE_Lr0Rpy5LLsY0wRwF0xgdHUJUwq4C6FHkc6LesEJHyWugeopDVKATnAMDG5aOaFgnkO5OWcnFxbiznLVcf2A',
    descricao: 'Peixe branco fresco marinado rapidamente com limão, cebola roxa, pimenta e coentro.',
    ingredientes: ['400 g de peixe branco fresco próprio para consumo cru', '6 limões', '1/2 cebola roxa em fatias finas', '1 pimenta ají ou dedo-de-moça', 'Coentro fresco', 'Sal', 'Milho e batata-doce para acompanhar'],
    preparo: ['Corte o peixe em cubos e mantenha refrigerado até a montagem.', 'Tempere com sal e acrescente o suco de limão pouco antes de servir.', 'Junte cebola, pimenta e coentro e misture delicadamente.', 'Deixe marinar por poucos minutos, mantendo a textura do peixe.', 'Sirva imediatamente com milho e batata-doce. Por segurança, use peixe de procedência adequada para consumo cru.']
  },
  feijoada: {
    nome: 'Feijoada de Panela de Barro', pais: 'Brasil', dificuldade: 'Média', tempo: '3h', porcoes: 6,
    imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
    descricao: 'Feijão preto cozido lentamente com carnes suínas e defumadas, servido com acompanhamentos brasileiros.',
    ingredientes: ['500 g de feijão preto', '300 g de carne-seca dessalgada', '250 g de costelinha suína', '150 g de linguiça defumada', '100 g de bacon', '1 cebola', '4 dentes de alho', '2 folhas de louro', 'Sal e pimenta'],
    preparo: ['Deixe o feijão de molho por algumas horas e descarte a água.', 'Cozinhe o feijão com louro até começar a ficar macio.', 'Doure bacon, linguiça e carnes em outra panela e acrescente cebola e alho.', 'Junte as carnes ao feijão e cozinhe em fogo baixo até o caldo engrossar e as carnes ficarem macias.', 'Ajuste o sal e sirva com arroz branco, couve, farofa e laranja.']
  },
  paella: {
    nome: 'Paella Marinera & Socarrat', pais: 'Valência, Espanha', dificuldade: 'Média', tempo: '1h10', porcoes: 4,
    imagem: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIcwVuMr4BfMFjrifBYNGQkt_jRT09sK5twPqjF3gIZUD_a1y1HxyVDvdiVFvkkWUNHBKgBtNagQZmm6W6VwocfKYKPccS3KaRXtC8l8InGUcs7RXGu4zurhcgN7c0hXbJWEC6ZFeXB7j6XwMBykitYZAh731WZxzAX0Sd8zdGiT9AIHgCWQJ7ifkqxpBjDteqDzHO9j7yiBCG_Lwt0-Tw_4ruWzzwH-x5e5waNlExQs1osSm5rzRXA',
    descricao: 'Arroz de paella cozido com açafrão, frutos do mar e o tradicional socarrat no fundo da panela.',
    ingredientes: ['300 g de arroz bomba ou outro arroz de grão curto', '500 g de frutos do mar variados', '1 tomate maduro ralado', '1 pimentão vermelho', '1 litro de caldo de peixe', 'Açafrão ou páprica', 'Azeite de oliva', '1 dente de alho', 'Sal e limão'],
    preparo: ['Aqueça a paellera com azeite e doure rapidamente os frutos do mar. Retire e reserve.', 'Refogue alho, pimentão e tomate até formar um sofrito.', 'Acrescente o arroz e misture por um minuto. Junte o caldo quente e o açafrão.', 'Distribua o arroz e cozinhe sem mexer até o líquido quase secar. Volte com os frutos do mar.', 'Aumente o fogo por alguns minutos no final para formar uma crosta dourada no fundo, o socarrat. Descanse antes de servir.']
  }
};

function receitaIdPorNome(nome) {
  const mapa = {
    'Ramen Tonkotsu Ancestral': 'ramen',
    'Cacio e Pepe Clássico': 'cacio',
    'Boeuf Bourguignon de Vinhedo': 'boeuf',
    'Ceviche Costeiro Tradicional': 'ceviche',
    'Feijoada de Panela de Barro': 'feijoada',
    'Paella Marinera & Socarrat': 'paella'
  };
  return mapa[nome];
}

function configurarLinksDeReceita() {
  document.querySelectorAll('article').forEach(card => {
    const titulo = card.querySelector('h2, h3, h4');
    if (!titulo) return;
    const id = receitaIdPorNome(titulo.textContent.trim());
    if (!id) return;
    card.style.cursor = 'pointer';
    card.addEventListener('click', event => {
      if (event.target.closest('button, a, input')) return;
      window.location.href = `receita.html?id=${id}`;
    });
  });
}

function mostrarReceita() {
  const area = document.getElementById('recipe-detail');
  if (!area) return;
  const id = new URLSearchParams(window.location.search).get('id') || 'ramen';
  const receita = receitas[id] || receitas.ramen;

  document.title = `${receita.nome} — Mavory`;
  area.innerHTML = `
    <div class="recipe-detail-grid">
      <div>
        <img class="recipe-detail-image" src="${receita.imagem}" alt="${receita.nome}">
      </div>
      <div class="recipe-info">
        <span class="recipe-tag">${receita.pais}</span>
        <h1>${receita.nome}</h1>
        <p class="recipe-description">${receita.descricao}</p>
        <div class="recipe-meta">
          <span>⏱ ${receita.tempo}</span><span>👨‍🍳 ${receita.dificuldade}</span><span>🍽 ${receita.porcoes} porções</span>
        </div>
      </div>
    </div>
    <div class="recipe-columns">
      <section class="recipe-box">
        <h2>Ingredientes</h2>
        <ul>${receita.ingredientes.map(i => `<li><label><input type="checkbox"> <span>${i}</span></label></li>`).join('')}</ul>
      </section>
      <section class="recipe-box">
        <h2>Modo de preparo</h2>
        <ol>${receita.preparo.map((p, i) => `<li><strong>${i+1}.</strong> ${p}</li>`).join('')}</ol>
      </section>
    </div>
    <div class="recipe-actions">
      <button type="button" class="primary-button" onclick="window.print()">Imprimir receita</button>
      <a class="secondary-button" href="receitas.html">Voltar para receitas</a>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href="#"]').forEach(link => link.addEventListener('click', e => e.preventDefault()));
  document.querySelectorAll('button[title="Favoritar"]').forEach(button => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('.material-symbols-outlined, .heart-icon');
      if (!icon) return;
      const ativo = icon.style.fontVariationSettings.includes("'FILL' 1");
      icon.style.fontVariationSettings = ativo ? "'FILL' 0" : "'FILL' 1";
    });
  });
  configurarLinksDeReceita();
  mostrarReceita();
});


// Recursos persistentes do protótipo (armazenados somente neste navegador).
const MAVORY_STORAGE = {
  favorites: 'mavory_favorites_v1',
  posts: 'mavory_posts_v1'
};
function mavoryRead(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch (_) { return fallback; }
}
function mavoryWrite(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (error) { console.error('Não foi possível salvar no navegador:', error); return false; }
}
function mavoryRecipeKey(card) {
  const heading = card && card.querySelector('h2, h3, h4');
  return heading ? receitaIdPorNome(heading.textContent.trim()) : null;
}
function mavorySetFavorite(card, active) {
  const id = mavoryRecipeKey(card);
  if (!id) return;
  const favorites = mavoryRead(MAVORY_STORAGE.favorites, []);
  const next = active ? Array.from(new Set([...favorites, id])) : favorites.filter(item => item !== id);
  mavoryWrite(MAVORY_STORAGE.favorites, next);
  const icon = card.querySelector('.heart-icon, .material-symbols-outlined');
  if (icon) {
    icon.textContent = active ? 'favorite' : 'favorite_border';
    icon.style.fontVariationSettings = active ? "'FILL' 1" : "'FILL' 0";
  }
  card.querySelectorAll('.favorite-toggle, [title="Favoritar"]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(active));
  });
}
function mavoryInitFavorites() {
  const favorites = mavoryRead(MAVORY_STORAGE.favorites, []);
  document.querySelectorAll('article, .recipe-card').forEach(card => {
    const id = mavoryRecipeKey(card);
    if (!id) return;
    const active = favorites.includes(id);
    const icon = card.querySelector('.heart-icon');
    if (icon) {
      icon.textContent = active ? 'favorite' : 'favorite_border';
      icon.style.fontVariationSettings = active ? "'FILL' 1" : "'FILL' 0";
    }
    const button = card.querySelector('.favorite-toggle, [title="Favoritar"]');
    if (button) button.setAttribute('aria-pressed', String(active));
  });
}
// Substitui o alternador apenas visual por uma versão que salva o estado.
window.toggleBookmark = function(button) {
  const card = button && button.closest('article, .recipe-card');
  if (!card) return;
  const id = mavoryRecipeKey(card);
  if (!id) return;
  const favorites = mavoryRead(MAVORY_STORAGE.favorites, []);
  mavorySetFavorite(card, !favorites.includes(id));
};

// A tela Compartilhar agora registra a receita localmente, em vez de simular sucesso.
window.handleShareAction = async function() {
  const name = document.getElementById('plateName');
  const desc = document.getElementById('plateDesc');
  const image = document.getElementById('formPhotoPreview');
  const button = document.getElementById('shareBtn');
  const feedback = document.getElementById('feedbackMessage');
  if (!name || !button || !feedback) return;
  const title = name.value.trim();
  if (!title) {
    name.focus();
    name.setCustomValidity('Dê um nome para o seu prato.');
    name.reportValidity();
    name.addEventListener('input', () => name.setCustomValidity(''), { once: true });
    return;
  }
  if (!image || !image.src) {
    feedback.textContent = 'Escolha ou capture uma fotografia antes de compartilhar.';
    feedback.classList.remove('hidden');
    return;
  }
  button.disabled = true;
  const original = button.innerHTML;
  button.innerHTML = '<span class="material-symbols-outlined">hourglass_top</span><span>Salvando no caderno...</span>';
  // Reduz fotos grandes para evitar exceder o limite de armazenamento do navegador.
  let photo = image.src;
  try {
    if (photo.startsWith('data:') && photo.length > 700000) {
      const img = new Image();
      await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; img.src = photo; });
      const canvas = document.createElement('canvas');
      const scale = Math.min(1, 1200 / Math.max(img.naturalWidth, img.naturalHeight));
      canvas.width = Math.round(img.naturalWidth * scale);
      canvas.height = Math.round(img.naturalHeight * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      photo = canvas.toDataURL('image/jpeg', 0.78);
    }
    const posts = mavoryRead(MAVORY_STORAGE.posts, []);
    posts.unshift({
      id: 'post-' + Date.now(),
      title,
      description: desc ? desc.value.trim() : '',
      image: photo,
      author: 'Caleb',
      createdAt: new Date().toISOString()
    });
    if (!mavoryWrite(MAVORY_STORAGE.posts, posts.slice(0, 30))) {
      throw new Error('Armazenamento cheio. Escolha uma foto menor e tente novamente.');
    }
    feedback.textContent = 'Prato registrado neste navegador! Você já pode encontrá-lo no seu perfil.';
    feedback.classList.remove('hidden');
    button.innerHTML = '<span class="material-symbols-outlined">check_circle</span><span>Prato registrado</span>';
  } catch (error) {
    feedback.textContent = error.message || 'Não foi possível salvar. Tente uma foto menor.';
    feedback.classList.remove('hidden');
    button.innerHTML = original;
  } finally {
    button.disabled = false;
    setTimeout(() => { if (button.isConnected) button.innerHTML = original; }, 2500);
  }
};

// Atualiza cards de receitas com favoritos persistidos e navegação para detalhes.
document.addEventListener('DOMContentLoaded', () => {
  mavoryInitFavorites();
  document.querySelectorAll('.recipe-card, article').forEach(card => {
    const id = mavoryRecipeKey(card);
    if (!id) return;
    card.querySelectorAll('a[href="#"]').forEach(link => {
      if (link.textContent.toLowerCase().includes('caderno completo')) {
        link.href = `receita.html?id=${id}`;
      }
    });
    const favorite = card.querySelector('.favorite-toggle');
    if (favorite && !favorite.hasAttribute('onclick')) favorite.addEventListener('click', event => {
      event.stopPropagation();
      const current = mavoryRead(MAVORY_STORAGE.favorites, []);
      mavorySetFavorite(card, !current.includes(id));
    });
  });
});
