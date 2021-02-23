export const aside = () => {
  const divAside = document.createElement('div');
  const viewAside = `
    <p>Costado</p>
    `;
  divAside.innerHTML = viewAside;
  return divAside;
};
