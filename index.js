// Reroute button link animation
const attentionBtn = document.getElementById('AttentionBtn');
const animateLabel = document.getElementById('animateLabel');
const heroBtn = document.getElementById('heroBtn');


attentionBtn.addEventListener('click', function(){
    animateLabel.style.display = 'block';
    heroBtn.style.display = 'none';
})
