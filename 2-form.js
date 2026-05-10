import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const n=`<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="1"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>`,m=document.querySelector(".form-container");m.insertAdjacentHTML("afterbegin",n);const r="feedback-form-state",a={email:"",message:""},t=document.querySelector(".feedback-form");t.querySelector("textarea");t.addEventListener("input",e=>{const{name:o,value:l}=e.target;a[o]=l;const s=JSON.stringify(a);localStorage.setItem(r,s)});document.addEventListener("DOMContentLoaded",()=>{const e=c(r);e&&(t.elements.email.value=e.email,t.elements.message.value=e.message)});t.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem(r),t.reset()});function c(e){const o=localStorage.getItem(e);return JSON.parse(o)}
//# sourceMappingURL=2-form.js.map
