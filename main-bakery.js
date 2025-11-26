  window.addEventListener('scroll',function() {
    const upwords = document.querySelector('.upwords');
    if (window.scrollY > 320) {
        upwords.style.opacity = '1';
        upwords.style.visibility = 'visible';
    } else {
        upwords.style.opacity = '0';
        upwords.style.visibility = 'hidden';
    }
});
  window.addEventListener('scroll',function() {
    const headfttb = document.querySelector('.pages-head');
    if (window.scrollY > 49) {
        headfttb.style.backgroundColor = 'rgb(17, 17, 17)';
        headfttb.style.top = '0px';
    } else {
        headfttb.style.backgroundColor = 'transparent';
        headfttb.style.top = '49px';
    }
});