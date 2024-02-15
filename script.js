let icon_img = document.getElementById('ham_icon');
let icon_background = document.getElementById('ham_icon_background');

function handleClick() {
  if (icon_background.style.display === 'none') {
    icon_background.style.display = 'flex';
  } else {  
    icon_background.style.display = 'none';
  }
};

function handleResize() {
  let windowWidth = window.innerWidth;

  let thresholdWidth = 1000; 

  if (windowWidth <= thresholdWidth) {
    icon_img.addEventListener('click', handleClick);
  } else {
    icon_img.removeEventListener('click', handleClick);

    icon_background.style.display = 'none';
  }
};


function displaynone(){
  icon_background.style.display='none'

};



function project_1_link(){
  window.open('https://abdullah-zzz.github.io/WeatherApp/', '_blank');

}
function project_2_link(){
  window.open('https://abdullah-zzz.github.io/TodoList/', '_blank');

}



handleResize();


window.addEventListener('resize', handleResize);
