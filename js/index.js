const $form = document.querySelector('.add-property-form');
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData($form);
  formData.forEach((value) => {
    console.log( value);
  });
});


let form = document.forms[0];
let selectbox = form.selectbox;

//console.log(selectbox);

selectbox.addEventListener('change', ()=> {
   console.log(selectbox.value);
}, false);