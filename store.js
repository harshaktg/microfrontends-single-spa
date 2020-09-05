window.myapp = {
    counter: 0,
    incrementor: () => {
        window.myapp.counter += 1;
        window.dispatchEvent(new Event('onIncrement'));
    },
    decrementor: () => {
        window.myapp.counter -= 1;
        window.dispatchEvent(new Event('onDecrement'));
    }
};