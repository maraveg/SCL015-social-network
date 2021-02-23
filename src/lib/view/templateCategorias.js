export const sections = () => {
  const divSections = document.createElement('div');
  const viewSections = `
    <p>Categorias</p>
    `;
  divSections.innerHTML = viewSections;
  return divSections;
};
