// Popup 1
var template1 = document.querySelector('#popup-template1') 
var htmlTip1  = tippy('#btn1',{
                    html: template1,
                    placement: 'bottom',
                    animation: 'fade',
                    animateFill: false,
                    duration: [300,100],
                    arrow: false,
                    trigger:'click',
                    interactive: true,
                    distance:10,
                    maxWidth: '500px',
                    interactiveBorder: 0,
                    theme: 'covestro',
                });

// Close Button 1
function closePop1(){
    document.querySelector('#btn1')._tippy.hide(75)
}

