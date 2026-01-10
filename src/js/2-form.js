let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const fillFormFields = () => {
  try {
    if (localStorage.length === 0) {
      return;
    }

    const savedItemsToLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    formData = savedItemsToLS;
    for (const key in savedItemsToLS) {
      form.elements[key].value = savedItemsToLS[key];
    }
  } catch (error) {
    console.log(error);
  }
};
fillFormFields();

const handleInput = event => {
  const { target: fieldsForm } = event;

  const fieldsName = fieldsForm.name;
  const fieldsValue = fieldsForm.value;
  formData[fieldsName] = fieldsValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const handleSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  console.log(formData);
  formData = { email: '', message: '' };
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

// const formData = {
//   email: '',
//   message: '',
// };
// const form = document.querySelector('.feedback-form');

// const localStorageKey = 'feedback-form-state';

// console.log(form);

// form.addEventListener('submit', handleSubmit);

// form.addEventListener('input', handleInput);

// const savedData = JSON.parse(localStorage.getItem(localStorageKey));
// if (savedData) {
//   formData.email = savedData.email ?? '';
//   formData.message = savedData.message ?? '';
//   form.elements.email.value = formData.email;
//   form.elements.message.value = formData.message;
// }

// function handleInput(event) {
//   (formData.email = form.elements.email.value),
//     (formData.message = form.elements.message.value);
//   localStorage.setItem(localStorageKey, JSON.stringify(formData));
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   if (formData.email === '' || formData.message === '') {
//     alert('Fill please all fields');
//     return;
//   }

//   localStorage.removeItem(localStorageKey);
//   form.reset();
//   console.log({ ...formData });
//   (formData.email = ''), (formData.message = '');
// }
