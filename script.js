fetch("https://api.ipify.org/?format=json")
.then(results => results.json())
.then(data => {
  document.body.innerHTML = `Your IP Address is ${data.ip}, Isn't it? Anyways, Thank you for your IP Address! `;
});