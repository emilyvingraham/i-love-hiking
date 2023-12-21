function subscribe() {
  let firstName = prompt('What is your name?');
  let email = prompt('What is your email?');
  alert(`Thank you ${firstName} for subscribing to our monthly newsletter!`);
}

let newsletterButton = document.querySelector('.newsletter-button');
newsletterButton.addEventListener('click', subscribe);

function favorite() {
  let favoriteHikeAnswer = prompt(
    'Is your favorite hike listed?'
  ).toLowerCase();
  if (favoriteHikeAnswer === 'yes') {
    alert('Great!');
  } else {
    let notListed = prompt('What is your favorite hike?');
    alert(
      `Thank you! We will feature ${notListed} in our upcoming newsletter.`
    );
  }
}

let favoriteButton = document.querySelector('.favorite-button');
favoriteButton.addEventListener('click', favorite);
