document.addEventListener('DOMContentLoaded', () => {
 const html=document.documentElement;
 const button=document.getElementById('themeToggle');
 const framework=document.body.dataset.framework;
 const attr=framework==='bootstrap'?'data-bs-theme':'data-theme';
 const saved=localStorage.getItem('lab8-theme')==='dark'?'dark':'light';
 function setTheme(value){html.setAttribute(attr,value);button.textContent=value==='dark'?'☀️ Light Mode':'🌙 Dark Mode';localStorage.setItem('lab8-theme',value)}
 setTheme(saved);
 button.addEventListener('click',()=>setTheme(html.getAttribute(attr)==='dark'?'light':'dark'));
 document.querySelectorAll('.flip-card').forEach(card=>{
  card.addEventListener('click',()=>card.classList.toggle('is-flipped'));
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();card.classList.toggle('is-flipped')}});
 });
 const form=document.getElementById('feedbackForm');
 const status=document.getElementById('formStatus');
 const checks={
  name:v=>v.trim().length>=2&&v.trim().length<=50&&!/\d/.test(v),
  email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  message:v=>v.trim().length>=10&&v.trim().length<=500
 };
 const labels={name:'Нэр 2–50 тэмдэгт, тоогүй байх ёстой.',email:'Зөв имэйл хаяг оруулна уу.',message:'Санал 10–500 тэмдэгт байх ёстой.'};
 function validate(field){const ok=checks[field.name](field.value);field.classList.toggle('invalid',!ok);field.classList.toggle('valid',ok);field.setAttribute('aria-invalid',String(!ok));document.getElementById(field.name+'Error').textContent=ok?'':labels[field.name];return ok}
 form.querySelectorAll('[name]').forEach(field=>field.addEventListener('input',()=>validate(field)));
 form.addEventListener('submit',e=>{e.preventDefault();const fields=[...form.querySelectorAll('[name]')];const ok=fields.map(validate).every(Boolean);status.textContent=ok?'Санал амжилттай шалгагдлаа (сервер рүү илгээгээгүй).':'Алдаатай талбаруудаа засна уу.';status.setAttribute('role','status');if(ok){form.reset();fields.forEach(f=>f.classList.remove('valid'))}});
});
