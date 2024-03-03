function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
  const createBtn = document.querySelector('button[data-create]');
  const destroyBtn = document.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createBtn.addEventListener('click', createBoxes);
  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = input.value;
    if (amount < 1 || amount > 100) {
      return;
    }

    destroyBoxes();

    const boxes = Array.from({ length: amount }, (_, index) => {
      const box = document.createElement('div');
      box.style.width = `${30 + index * 10}px`;
      box.style.height = `${30 + index * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      return box;
    });

    boxesContainer.append(...boxes);
    input.value = '';
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }