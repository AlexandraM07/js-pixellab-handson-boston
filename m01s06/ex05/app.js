(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showbutton = document.querySelector('#showButton');
    const toggletEventButton = document.querySelector('#toggletEventButton');
    const removeButton = document.querySelector('#removeButton');
    let eventBound = true;

    showbutton.addEventListener('click', showAlert);
    showMessage('Alerta va fi afisata');

    removeButton.addEventListener('click', function () {
      if (!confirm(`Stergem butoanele?`)) {
        return;
      }

      toggletEventButton.remove();
      showbutton.remove();
    });

    toggleEventButton.addEventListener('click', function () {
      let message = '';
      let label = '';

      if (eventBound) {
        // if event is bound, remove
        showbutton.removeEventListener('click', showAlert);
        eventBound = false;
        message = 'Porneste afisarea';
        label = 'Alerta nu va fi afisata';
      } else {
        // if event is not bound, add
        showbutton.removeEventListener('click', showAlert);
        eventBound = true;
        message = 'Opreste afisarea';
        label = 'Alerta va fi afisata';
      }

      this.innerText = message;
      showMessage(label);
    });

    // function functions are hoisted
    function showAlert() {
      alert('Butonul a fost apasat');
    }

    function showMessage(message) {
      const cssClass = 'message';
      let paragraphElement = document.querySelector(`.${cssClass}`);

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add(cssClass);
      }

      paragraphElement.innerText = message;
      paragraphElement.classList.add('message');

      document.body.append(paragraphElement);
    }
  });
})();
