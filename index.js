anime({
    targets: 'div.box.red',
    translateX: [
        { value: 300, duration: 500 },
        { value: 0, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine'
    }
});

anime({
    targets: 'div.box.blue',
    translateX: [
        { value: 300, duration: 500, delay: 1000 },
        { value: 0, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 1000,
    }
});

anime({
    targets: 'div.box.green',
    translateX: [
        { value: 300, duration: 500, delay: 2000 },
        { value: 0, duration: 800 }
    ],
    rotate: {
        value: '1turn',
        easing: 'easeInOutSine',
        delay: 2000,
    }
});