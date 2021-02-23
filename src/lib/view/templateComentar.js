export const newComment = () => {
  const divNewComment = document.createElement('div');
  const viewNewComment = `
    <p>Comenta</p>
    `;
  divNewComment.innerHTML = viewNewComment;
  return divNewComment;
};
