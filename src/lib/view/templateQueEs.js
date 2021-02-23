export const about = () => {
  const divAbout = document.createElement('div');
  const viewAbout = `
    <p>¿Que es Patiperros?</p>
    `;
  divAbout.innerHTML = viewAbout;
  return divAbout;
};
