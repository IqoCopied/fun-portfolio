
const fog = VANTA.FOG({
  el: ".vanta-fog",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  highlightColor: 0x0,
  midtoneColor: 0x0,
  lowlightColor: 0x0,
  baseColor: 0x282828,
  blurFactor: 0.53,
  zoom: 1.20,
  speed: 1.5
})

$('.click').on('mousedown touchstart', function(settings) {
  $('.click-text').addClass('click-text-min')
  fog.setOptions( { 
    speed: 8
  })
  setTimeout(() => {
    window.location.href = 'https://youtube.com';
  }, 71 * 10)
})