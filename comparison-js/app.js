function createPage() {
  const h1 = document.createElement('h1');
  const message = document.createTextNode('Oiii, tudo bom contigo?');

  h1.appendChild(message);

  return h1;
}

function initializeApp(elem) {
  const root = document.getElementById('app');

  root.appendChild(elem);
}

initializeApp(createPage());