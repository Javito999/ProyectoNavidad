document.getElementById('enlaces').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue) {
        window.location.href = selectedValue; // Redirige a la URL seleccionada
    }
});

