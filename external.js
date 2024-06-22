
    function showAlert() {
        alert("Это сообщение из alert");
    }

    function showConfirm() {
        let result = confirm("Вы уверены?");
        if (result) {
            alert("Вы нажали 'ОК'");
        } else {
            alert("Вы нажали 'Отмена'");
        }
    }

    function showPrompt() {
        let name = prompt("Введите ваше имя", "Имя");
        if (name) {
            alert("Привет, " + name);
        } else {
            alert("Вы не ввели имя");
        }
    }
