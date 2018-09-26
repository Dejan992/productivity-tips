let name;

function setName(myName) {
  console.log('myName', myName);
  name = myName || 'Kelly';
  console.log('name', name);
}

function showMessage(person) {
  if (!person) return alert('I dunno who you are 🤔');
  alert(message);
  const message = `Hi, ${name}! 👋🏼`;
  console.log('message', message);
}

setName('Laura');
showMessage();
