var hellos=[{word:"Aloha",country:"hawaiian"},{word:"Bonjour",country:"french"},{word:"Hello",country:"english"},{word:"Hallo",country:"german"},{word:"Bonjour",country:"french"},{word:"¡Hola",country:"spanish"},{word:"Ciao",country:"italian"}];$(document).ready(function(){$a=$("#hello");var e=Math.floor(Math.random()*hellos.length);$a.text(hellos[e].word),$a.attr("data-original-title","Hello in "+hellos[e].country)});