function setCookie(cname, cvalue, exdays) { //Setta un cookie di nome "cname" e valore "cvalue" a scadenza "exdays"
			var d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			var expires = "expires="+d.toUTCString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		}

/*Made by: Stefano Petrocchi*/