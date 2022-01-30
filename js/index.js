var PropertyInput = document.getElementById('property-address');

document.querySelector('form.form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(PropertyInput.value);    
});