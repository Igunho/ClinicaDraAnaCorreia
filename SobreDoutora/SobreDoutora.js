document.addEventListener("DOMContentLoaded", function () {


  const imagens = document.querySelectorAll('.foto-box-carrossel img');
  const anterior = document.querySelector('.btn-anterior');
  const proximo = document.querySelector('.btn-proximo');
  let indiceAtual = 0;

  function mostrarImagem(indice) {
    imagens.forEach(img => img.classList.remove('foto-visivel'));
    imagens[indice].classList.add('foto-visivel');
  }

  anterior.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(indiceAtual);
  });

  proximo.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    mostrarImagem(indiceAtual);
  });

//mapa

  const mapaDiv = document.querySelector(".mapa");
  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.style.border = "0";
  iframe.loading = "lazy";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "no-referrer-when-downgrade";

  const endereco = "Av. Pres. Costa e Silva, 609 - sala 507 - Boqueirão";
  const enderecoEncoded = encodeURIComponent(endereco);
  iframe.src = `https://www.google.com/maps?q=${enderecoEncoded}&output=embed`;

  mapaDiv.innerHTML = ""; 
  mapaDiv.appendChild(iframe);
});
