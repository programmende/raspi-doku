(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{335:function(e,n,t){e.exports=t.p+"assets/img/loginscreen.b17a63e1.png"},336:function(e,n,t){e.exports=t.p+"assets/img/change-password.e253a275.png"},337:function(e,n,t){e.exports=t.p+"assets/img/change-port.067c6e97.png"},338:function(e,n,t){e.exports=t.p+"assets/img/change-time.01519a8e.png"},354:function(e,n,t){"use strict";t.r(n);var a=t(21),i=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"openmediafault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openmediafault"}},[e._v("#")]),e._v(" OpenMediaFault")]),e._v(" "),a("p",[e._v("openmediavault ist eine NAS-Lösung (Network Attached Storage) der nächsten Generation, die auf Debian Linux basiert. Es enthält Dienste wie SSH, (S) FTP, SMB / CIFS, DAAP-Medienserver, RSync, BitTorrent-Client und viele mehr. Dank des modularen Aufbaus des Frameworks kann es über Plugins erweitert werden.")]),e._v(" "),a("p",[e._v("openmediavault wurde hauptsächlich für den Einsatz in kleinen Büros oder Heimbüros entwickelt, ist jedoch nicht auf diese Szenarien beschränkt. Es ist eine einfache und benutzerfreundliche Out-of-the-Box-Lösung, mit der jeder einen Network Attached Storage ohne tiefere Kenntnisse installieren und verwalten kann.")]),e._v(" "),a("h2",{attrs:{id:"inhaltsverzeichnis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inhaltsverzeichnis"}},[e._v("#")]),e._v(" Inhaltsverzeichnis")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#inhaltsverzeichnis"}},[e._v("Inhaltsverzeichnis")])]),a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),a("li",[a("a",{attrs:{href:"#ersteinrichtung"}},[e._v("Ersteinrichtung")]),a("ul",[a("li",[a("a",{attrs:{href:"#der-erste-login"}},[e._v("Der erste Login")])]),a("li",[a("a",{attrs:{href:"#die-logindaten-andern"}},[e._v("Die Logindaten ändern")])]),a("li",[a("a",{attrs:{href:"#port-und-auto-logout-andern"}},[e._v("Port und Auto Logout ändern")])]),a("li",[a("a",{attrs:{href:"#datum-und-uhrzeit-einstellen"}},[e._v("Datum und Uhrzeit einstellen")])])])]),a("li",[a("a",{attrs:{href:"#datentrager-anschliessen"}},[e._v("Datenträger anschließen")]),a("ul",[a("li",[a("a",{attrs:{href:"#dateisystem-anlegen"}},[e._v("Dateisystem anlegen")])]),a("li",[a("a",{attrs:{href:"#freigegebene-ordner-anlegen"}},[e._v("Freigegebene Ordner anlegen")])]),a("li",[a("a",{attrs:{href:"#smb-cifs-freigabe-erstellen"}},[e._v("SMB/CIFS Freigabe erstellen")])])])]),a("li",[a("a",{attrs:{href:"#omvextras-installieren"}},[e._v("OMVExtras installieren")]),a("ul",[a("li",[a("a",{attrs:{href:"#docker-installieren"}},[e._v("Docker installieren")])]),a("li",[a("a",{attrs:{href:"#portainer-installieren"}},[e._v("Portainer installieren")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Starte Putty und gib die IP Adresse deines PIs ein und verbinde dich mit SSH zu deinem Raspberry.")])]),e._v(" "),a("li",[a("p",[e._v("Logge dich mit dem Benutzernamen "),a("code",[e._v("pi")]),e._v(" und dem Passwort, dass du vorhin vergeben hast  auf dem Pi ein.")])]),e._v(" "),a("li",[a("p",[e._v("Zuerst aktualisiere wie immer die Paketquellen und Pakete. Gib dazu folgenden Befehl in Putty ein")])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" upgrade\n")])])]),a("ul",[a("li",[e._v("Danach starte die Installation von OpenMediaVault indem du in Putty folgenden Befehl eingibst")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" -O - https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Die Installation kann einige Zeit in Anspruch nehmen. Wenn die Installation abgeschlossen ist, wird dir wieder die Eingabeshell angezeigt.")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("pi@raspberry:~$\n")])])]),a("ul",[a("li",[e._v("Starte den Pi neu, indem du folgendes in Putty eingibst")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Fertig.")])]),e._v(" "),a("h2",{attrs:{id:"ersteinrichtung"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ersteinrichtung"}},[e._v("#")]),e._v(" Ersteinrichtung")]),e._v(" "),a("h3",{attrs:{id:"der-erste-login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#der-erste-login"}},[e._v("#")]),e._v(" Der erste Login")]),e._v(" "),a("ul",[a("li",[e._v("Nach 3 bis 5 Minuten nachdem der Pi fertig gestartet ist, kannst du dich über den Webbrowser am OpenMediaVault anmelden. Gib dazu einfach die IP Adresse deines PIs im Webbrowser ein.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Standard Login")]),e._v(" "),a("p",[a("strong",[e._v("Username:")]),e._v(" admin"),a("br"),e._v(" "),a("strong",[e._v("Passwort:")]),e._v(" openmediavault")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(335),alt:"Screenshot"}})]),e._v(" "),a("h3",{attrs:{id:"die-logindaten-andern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#die-logindaten-andern"}},[e._v("#")]),e._v(" Die Logindaten ändern")]),e._v(" "),a("p",[e._v("Als erstes sollten wir das Passwort ändern, denn alle OpenMediaVault Installationen besitzen bei der Installation das gleiche Passwort. Dies stellt natürlich eine Sicherheitslücke da.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Navigiere dazu im linken Navigationsmenü nach "),a("code",[e._v("(1) System -> (2) Allgemeine Einstellungen")]),e._v(" und aktiviere den Tab "),a("code",[e._v("(3) Web Administrator Passwort")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Gib ein neues Passwort ein und speichere es mit einem Klick auf "),a("code",[e._v("(4) Speichern")]),e._v(".")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(336),alt:"Screenshot"}})]),e._v(" "),a("h3",{attrs:{id:"port-und-auto-logout-andern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-und-auto-logout-andern"}},[e._v("#")]),e._v(" Port und Auto Logout ändern")]),e._v(" "),a("p",[e._v("Als nächstes ändern wir den Port und das automatische Ausloggen von OpenMediaVault.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Navigiere dazu im linken Navigationsmenü nach "),a("code",[e._v("(1) System -> (2) Allgemeine Einstellungen")]),e._v(" und aktiviere den Tab "),a("code",[e._v("(3) Web Administrator")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Hier ändern wir den Standartport "),a("code",[e._v("(4) 80")]),e._v(" auf "),a("code",[e._v("(4) 82")]),e._v(" ab und stellen die "),a("code",[e._v("(5) Automatische Abmeldung")]),e._v(" auf "),a("code",[e._v("(5) 60 Minuten")]),e._v(" ein.")])]),e._v(" "),a("li",[a("p",[e._v("Klicke auf "),a("code",[e._v("(6) Speichern")]),e._v(", um die Änderung zu speichern.")])]),e._v(" "),a("li",[a("p",[e._v("In der sich daraufhin öffnenden Notificationbar klicke auf "),a("code",[e._v("(7) Anwenden")]),e._v(" um die Änderung zu übernehmen. Der Speichervorgang kann einige Zeit in Anspruch nehmen.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(337),alt:"Screenshot"}})]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Wichtig")]),e._v(" "),a("p",[e._v("Danach ist das OpenMediaVault nicht mehr über den Standartport erreichbar und es wird eine Fehlermeldung angezeigt. Korrigiere die IP Adresse in deinem Browser indem du ein "),a("code",[e._v(":82")]),e._v(" an die IP anfügst.")])]),e._v(" "),a("ul",[a("li",[e._v("Nun kannst du dich wieder in deinem OpenMediaVault anmelden.")])]),e._v(" "),a("h3",{attrs:{id:"datum-und-uhrzeit-einstellen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datum-und-uhrzeit-einstellen"}},[e._v("#")]),e._v(" Datum und Uhrzeit einstellen")]),e._v(" "),a("p",[e._v("Als nächstes stellen wir das Datum und die Uhrzeit ein.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Navigiere dazu im linken Navigationsmenü nach "),a("code",[e._v("(1) System -> (2) Datum & Zeit")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Hier kannst du jetzt die "),a("code",[e._v("(3) Zeitzone")]),e._v(" einstellen, in unserem Fall "),a("code",[e._v("Europe/Berlin")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Aktiviere als nächstes den Schalter "),a("code",[e._v("(4) NTP Server benutzen")]),e._v(" damit die Uhrzeit automatisch von einem Zeitserver syncronisiert wird.")])]),e._v(" "),a("li",[a("p",[e._v("Speichere die Änderungen mit einem Klick auf "),a("code",[e._v("(5) Speichern")]),e._v(".")])])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Nicht vergessen")]),e._v(" "),a("p",[e._v("Um die Änderungen endgültig zu übernehmen, klicke oben in der erscheinenden Notificationbar auf "),a("code",[e._v("Anwenden")]),e._v(".")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(338),alt:"Screenshot"}})]),e._v(" "),a("h2",{attrs:{id:"datentrager-anschliessen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datentrager-anschliessen"}},[e._v("#")]),e._v(" Datenträger anschließen")]),e._v(" "),a("p",[e._v("Als nächstes Schließen wir einen Datenträger in Form einer Festplatte an unser OpenMediaVault an.")]),e._v(" "),a("ul",[a("li",[e._v("Schließe zuerst die Festplatte an einen USB Port an.")]),e._v(" "),a("li",[e._v("Danach klicke im Menü "),a("code",[e._v("(1) System -> (2) Logische Laufwerke")])])]),e._v(" "),a("p",[e._v("// TODO Datenträger anschließen")]),e._v(" "),a("h3",{attrs:{id:"dateisystem-anlegen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dateisystem-anlegen"}},[e._v("#")]),e._v(" Dateisystem anlegen")]),e._v(" "),a("h3",{attrs:{id:"freigegebene-ordner-anlegen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freigegebene-ordner-anlegen"}},[e._v("#")]),e._v(" Freigegebene Ordner anlegen")]),e._v(" "),a("h3",{attrs:{id:"smb-cifs-freigabe-erstellen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smb-cifs-freigabe-erstellen"}},[e._v("#")]),e._v(" SMB/CIFS Freigabe erstellen")]),e._v(" "),a("h2",{attrs:{id:"omvextras-installieren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#omvextras-installieren"}},[e._v("#")]),e._v(" OMVExtras installieren")]),e._v(" "),a("h3",{attrs:{id:"docker-installieren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-installieren"}},[e._v("#")]),e._v(" Docker installieren")]),e._v(" "),a("h3",{attrs:{id:"portainer-installieren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#portainer-installieren"}},[e._v("#")]),e._v(" Portainer installieren")])])}),[],!1,null,null,null);n.default=i.exports}}]);