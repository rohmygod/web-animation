# `De opdracht`
De gekregen opdracht is: maak een css / html / js versie van een gekozen kunstwerk uit een archief. Maak met gebruik van css leuke animaties om het kunstwerk minder statisch te maken. 



# `When we think of Berlin`
<img src="https://cdn.shopify.com/s/files/1/0157/5106/products/Herb-Lester-Berlin-Guide_grande.jpg?v=1588005683">
When we think of Berlin is een illustratie gemaakt door Herb Lestr, voor een city guide met allerlei informatie over Berlijn. Het idee achter de city guide was dat een aantal mensen allerlei markten, parken, mooie stations, musea, goeie koffie tentjes en meer hadden genoteerd waar zij als eerste aan dachten als zij Berlijn hoorden. 

Ik heb dit kunstwerk gekozen omdat er veel detail in zit, en ik meteen al leuke dingetjes zag om te animeren en het werk tot leven te brengen. 

>Artwork by: Herb Lester
>Year published: 2011
>Made for: city guide's


# `Workflow`
 Ik ben begonnen met het namaken van mijn kunstwerk in illustrator, ik heb hier nog wat elementen aan toegevoegd zoals het bootje. Het kostte nogal wat tijd omdat alles met de pen tool overgetrokken moest worden (helaas de trace pakte het werk niet) maar dat was het waard! Vervolgens heb ik het geëxporteerd als SVG en geopend in Sublime om zo verder te gaan werken met code. 
<img src="ReadmeImg/Illustrator.png">


# `Responsive`
Tijdens het responsive maken van mijn kunstwerk kwam ik er achter dat ik een ontwerp fout had gemaakt. Mijn kunstwerk schaalt mee zoals ik wil, alleen is het dan erg klein op mobile. Ik dacht dat er een mogelijkheid was om het kunstwerk gewoon te vergroten, maar dan krijg je dat je heel ver naar links en rechts kan scrollen wat niet de bedoeling is. Sommige animaties zijn nu erg klein, maar dat heb ik geprobeerd om op te lossen met een button. 
<img src="ReadmeImg/Respons.gif">

# `Interacties & animaties`
* Vuurwerk (keypress)
* Beweging in het gebouw (hover)
* Bootje
* Fade in
* Boompjes
* Vliegtuig (keypress)

<B>Vuurwerk</B>
Ik had wel eens eerder met een keypress gebruikt bij frontend voor designers, maar het was toch een beetje weggevallen. Dus dat was even opnieuw uitzoeken maar het is uit eindelijk gelukt! Als je arrow up indrukt komt het vuurwerk tevoorschijn door middel van een stukje script die een "class hidden" en een "class show" toggled. Hetzelfde geldt als je de v indrukt, alleen komt er dan een vliegtuigje tevoorschijn
<img src="ReadmeImg/Loop.gif">
<img src="ReadmeImg/Vuurwerk.gif">

>Vliegtuig: heb ik genanimeerd aan de hand van een <animateMotion> tag. Deze was wel nieuw voor mij! Maar na wat gegoogle snapte ik wat de bedoeling er van was en dat deze juist perfect is voor svg animaties. 

