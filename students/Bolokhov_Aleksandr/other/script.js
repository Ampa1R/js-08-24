"use strict";

class TextTransform {
    constructor() {
        this.textParagraf = document.querySelector(".text");
        this.textChange();
        this.wordChange();
    }

    textChange() {
        const text = this.textParagraf.innerText.replace(/"/g, "'");
        console.log(text);
        this.textParagraf.innerText = text;
    }

    wordChange () {
        const text = this.textParagraf.innerText.replace(/(\w)'(\w)/g, '$1"$2');
        console.log(text);
        this.textParagraf.innerText = text;
    }
}

const textTransform = new TextTransform();

class FormSendСheck {
    constructor() {
        this.button = document.querySelector(".sendCheck");
        this.name = document.querySelector (".name");
        this.email = document.querySelector(".email");
        this.number = document.querySelector(".number");
        this.sendFromCheck();
    }

    nameCheck() {
        const check = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
        if (check.test(this.name.value)) {
            console.log("ok");
        } else {
            alert("Вы ввели некоректное имя!");
            this.name.style.backgroundColor = "red";
        };

    }

    emailCheck() {
        const check = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
        if (check.test(this.email.value)) {
            console.log("ok");
        } else {
            alert("Вы ввели некоректный email!");
            this.email.style.backgroundColor = "red";
        };
    }

    numderCheck() {
        const check = /\d{9}/;
        if (check.test(this.number.value)) {
            console.log("ok");
        } else {
            alert("Вы ввели некоректный тулефон!");
            this.number.style.backgroundColor = "red";
        };
    }

    sendFromCheck() {
        this.button.addEventListener("click", () => {
            this.nameCheck();
            this.emailCheck();
            this.numderCheck();
        });
    }
}

const formSendCheck = new FormSendСheck();