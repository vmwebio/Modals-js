import {modalController} from "./modalController.js";

// Modal 1
modalController({
    modal: '.modal__one',
    btnOpen: '.btn__open-one',
    btnClose:'.modal__close' ,
});

// Modal 2
modalController({
    modal: '.modal__two',
    btnOpen: '.btn__open-two',
    btnClose:'.modal__close' ,
    time: 600
});

