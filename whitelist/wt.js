// Load the @widgetbot/crate@3 library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
script.async = true;
script.defer = true;
document.head.appendChild(script);

// Initialize the Crate widget
script.onload = function() {
  new Crate({
    server: '988824977153359882', // Senior Boys SMP
    channel: '1009366218664316958' // #ɢɛռɛʀǟʟֆ
  })
}
