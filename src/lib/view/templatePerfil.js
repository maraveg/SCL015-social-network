export const profile = () => {
  const divProfile = document.createElement('div');
  const viewProfile = `
      <p>Perfil</p>
      `;
  divProfile.innerHTML = viewProfile;
  return divProfile;
};
