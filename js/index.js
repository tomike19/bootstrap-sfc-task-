const $form = document.querySelector('.add-property-form');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData($form);
  formData.forEach((value,key) => {
    console.log((key + ':' +  JSON.stringify( value,null,2)));

  });
});

