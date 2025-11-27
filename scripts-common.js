const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("openMenu");

menuBtn.onclick = function(){
  sidebar.classList.toggle("active");
};

document.querySelectorAll('#sidebar a').forEach(link => {
  link.onclick = () => {
    sidebar.classList.remove("active");
  };
});

function toggleDark(){
  document.body.classList.toggle("dark");
  const btn = document.getElementById("darkToggle");
  const icon = btn.querySelector("i");
  const text = btn.querySelector("span");
  
  if(document.body.classList.contains("dark")){
    icon.className = "fas fa-sun";
    text.textContent = "Modo Claro";
  } else {
    icon.className = "fas fa-moon";
    text.textContent = "Modo Escuro";
  }
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.fade-slide').forEach(el=>{
  observer.observe(el);
});

const skillObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const fills = entry.target.querySelectorAll('.progress-fill');
      fills.forEach(fill => {
        fill.style.width = fill.style.width;
      });
    }
  });
}, {threshold: 0.5});

document.querySelectorAll('.skills').forEach(el=>{
  skillObserver.observe(el);
});
