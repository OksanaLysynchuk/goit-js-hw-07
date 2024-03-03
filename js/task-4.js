const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {};
  const formElements = event.target.elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];

    if (element.nodeName === 'INPUT') {
      const { name, value } = element;
      formData[name] = value.trim();
    }
  }

  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  form.reset();
});