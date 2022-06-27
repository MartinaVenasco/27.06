const userLogIn = prompt("Ciao! Inserisci il tuo nome utente");
const navbar = document.createElement("navbar");
navbar.className = "navbar";
document.body.append(navbar);
const textNav = document.createElement("div");
textNav.className = "textNav";
document.body.append(textNav);
navbar.append(textNav);
textNav.innerText = userLogIn;

try {
 if (textNav.innerText == "") throw new Error('Input username vuoto')
  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", userLogIn);
  }
} catch (error) { 
	alert ('Non hai inserito il nome utente')
	throw new Error('Input username vuoto')
}