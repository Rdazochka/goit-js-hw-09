
const feedBackForm = 'feedback-form-state'

const formData = {
    email: "",
    message: ""
};

const formEl = document.querySelector('.feedback-form');
const textAreaEl = formEl.querySelector('textarea');



formEl.addEventListener('input', (event) => {
     const { name, value } = event.target;

    formData[name] = value;

    const json = JSON.stringify(formData);
    localStorage.setItem(feedBackForm, json);

       
});

document.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS(feedBackForm);
    if(!data) return;

    formData.email = data.email;
    formData.message = data.message;

    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
        
})
    
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    
    console.log(formData);
    

    // const formData = new FormData(formEl);
    // const obj = {
    //     email: formData.get('email'),
    //     message: formData.get('message'),

    // };
    // console.log(obj);

    localStorage.removeItem(feedBackForm)
    formEl.reset();

    formData.email = "";
    formData.message = "";
}) 

//  function saveToLS(key, value) {
//         const json = JSON.stringify(value);
//         localStorage.setItem(key, value);
//     }

function loadFromLS(key) {
    const jsonData = localStorage.getItem(key);
    const result = JSON.parse(jsonData);
    return result;
}