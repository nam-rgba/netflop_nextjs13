const vip=()=>{
    alert('Bạn đã kích hoạt vip mode');
}

window.addEventListener('scroll',()=>{
    var header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
})
