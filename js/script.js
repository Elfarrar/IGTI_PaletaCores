window.addEventListener('load', function () {
  var rngRed = document.querySelector('#rngRed');
  var rngGreen = document.querySelector('#rngGreen');
  var rngBlue = document.querySelector('#rngBlue');
  var div = document.querySelector('#boxCollor');

  rngRed.addEventListener('input',changeValue);
  rngGreen.addEventListener('input',changeValue);
  rngBlue.addEventListener('input',changeValue);

  rngRed.value = 0;
  document.querySelector('#'+rngRed.getAttribute('data-target')).value = 0;
  rngGreen.value = 0;
  document.querySelector('#'+rngGreen.getAttribute('data-target')).value = 0;
  rngBlue.value = 0;
  document.querySelector('#'+rngBlue.getAttribute('data-target')).value = 0;

  changeCollor();

  function changeValue(target){
    var txtObj = document.querySelector('#'+this.getAttribute('data-target'));
    txtObj.value = this.value;
    changeCollor();
  }

  function changeCollor(){
    var thergb = "rgb(" + rngRed.value + "," + rngGreen.value + "," + rngBlue.value + ")"; 
    
    div.style.backgroundColor = thergb;
  }

});