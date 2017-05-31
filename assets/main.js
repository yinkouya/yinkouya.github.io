$('.carousel').carousel({
  interval: 3000;
})


function DrawImage(hotimg)
{
    $(hotimg).jqthumb({
    classname      : 'jqthumb',
            width          : '100%',
            height         : '300px',
            position       : { y: '50%', x: '50%'},
            zoom           : '1',
            method         : 'auto',
    });
}

