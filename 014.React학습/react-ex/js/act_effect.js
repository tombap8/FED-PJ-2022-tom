
function actEffect(){
    console.log('useEffect000');
    console.log(document.querySelector('.btn-gong'));
    console.log(document.querySelector('.btn-gong'));
    const showEffect = () => {
      $('.img-box').css({opacity:0}).delay(2000).fadeTo(1000,1);
      $('.gwrap').hide().delay(3000).slideDown(1000,'easeInOutSine')

    }
    showEffect();

    $('.btn-gong').click(showEffect);

  }

  export default actEffect;