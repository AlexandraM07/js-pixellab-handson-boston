(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', () => {
      const message = 'Mouseul este pe scena';
      const paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.classList.add('message');

      document.body.append(paragraphElement);

      createParagraph(message, 'message');
      console.log(message);
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouseul nu este pe scena';

      createParagraph(message, 'message');
      console.log(message);
    });

    // function functions are hoisted
    function createParagraph(message, cssClass = '') {
      const paragraphElement = document.createElement('p');
      paragraphElement.innerText = message;
      paragraphElement.classList.add(cssClass);

      document.body.append(paragraphElement);
    }
  });
})();
