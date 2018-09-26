let name;

function setName(myName) {
  console.log('myName', myName);
  name = myName || 'Kelly';
  console.log('name', name);
}

function showMessage(person) {
  if (!person) return alert('I dunno who you are 🤔');
  const message = `Hi, ${name}! 👋🏼`;
  alert(message);
  console.log('message', message);
}

setName('Laura');
showMessage();
