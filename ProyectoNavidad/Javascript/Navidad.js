document.getElementById('enlaces').addEventListener('click', function(event) {
    var selectedOption = event.target;

    
    if (selectedOption.tagName.toLowerCase() === 'option') {
        var selectedValue = selectedOption.value;
        if (selectedValue) {
            window.location.href = selectedValue; 
        }
    }
});

