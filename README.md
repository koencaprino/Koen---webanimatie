# Koen-webanimatie
webanimatie minor VID1

### Verhaal omschrijving voor de gebruiker

In 1979 heeft Morteza Momayez deze poster gedesignd voor internationale vrouwen dag.
De titel van de poster is “Women of the Revolution” **(press ‘tab’)**. 

Toen de Iraanse leider Sjah Mohammad Reza Pahlavi werd afgezet en vluchtte, kwamen er 5 vrouwen in opstand. Vrouwen werden tot 1979 achtergesteld en tijdens de Iraanse Revolutie (1978-1979) en zij kwamen op voor hun rechten. Aan het eind van de revolutie de macht overgenomen werd door Ayatollah Ruhollah Khomaini kregen vrouwen meer vrijheid en hadden de vijf vrouwen bereikt wat ze wilde. 

Dat gaf hun genoeg rede om een feestje te vieren. Fatima **(press 1)** nodigde iedereen uit bij haar thuis. Ze had net een nieuw sonos systeem aangeschaft **(press on women1)** om lekkere techno beats te knallen bij haar thuis **(press on play-button)**. 

Rabia **(press 2)**, die altijd haar rode boerka droeg, regelde wat coole sfeerverlichting voor het feestje **(press on women2)** en deed het licht uit **(press on ‘d’)**.

Samirah **(press 3)** regelde de confetti zodat het een echt lijp werd.

Zaina **(press 4)** ging wel lekker op de muziek van Fatima en draaide zich om naar Adila **(press 5) (press on women4)**.

Samen danste Zaina en Adila de hele nacht om te vieren dat de vrouwen in Iran meer rechten hadden gekregen **(play with hover on women4 & women5)**.




### Code

**Overflow**

Ik heb ervoor gekozen om de vrouwen in een div te zetten en deze horizontaal scrollbaar te maken. Ik heb een nieuw CSS3 element gebruikt: Scroll snapping. De 'mandatory' betekent dat de browser moet 'snappen' naar een snap-punt wanneer de gebruiker stopt met scrollen.

```
.vrouwen {
    padding-top: 10%;
    width: 70%;
    margin: auto;
    white-space: nowrap;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
}

svg {
    width: 23vw;
    scroll-snap-align: center;
}

```

**Keypress events**

Voor de keypress events heb ik '1', '2', '3', '4' en '5' gebruikt om de namen van de vrouwen in beeld te laten vliegen. Wanneer je op 'd' klikt veranderd de achtergrond naar donker om zo de context van het feestje duidelijker te maken.

```
document.addEventListener('keypress', function (e) {
    if (e.keyCode === 49) {
        fatima.classList.toggle('naam')
    }
    if (e.keyCode === 50) {
        rabia.classList.toggle('naam1')
    }
    if (e.keyCode === 51) {
        samirah.classList.toggle('naam')
    }
    if (e.keyCode === 52) {
        zaina.classList.toggle('naam1')
    }
    if (e.keyCode === 53) {
        adila.classList.toggle('naam')
    }
    console.log(e.keyCode);
    if (e.keyCode === 100) {
        body.classList.toggle('darkmode')
    }
})
```

**Klik events**

Voor alle klik events heb ik het zelfde stukje code gebruikt. Dit stukje code is voor het inlviegen van de Sonos box. Ik heb van een div een sonos box gemaakt en die een animatie geven. Ik heb er nog een soort van bouncy effect aan te geven zodat de animatie er vloeiender en echter uit ziet



**HTML**
```
.sonos {
    opacity: 0;
    position: absolute;
    bottom: 50%;
    width: 100px;
    height: 100px;
    text-align: center;
    background-color: lightgray;
    border-top: solid 20px #f6f6f6;
    border-bottom: solid 20px #f6f6f6;
}

.muziek {
    animation: muziek 1s ease-in forwards;
    opacity: 1;
}

@keyframes muziek {
    0% {
        transform: translateY(-400%);
    }
    80% {
        transform: translateY(-105%)
    }
    90% {
        transform: translateY(-110%);
    }
    100% {
        transform: translateY(-105%);
    }
}
```

**CSS**
```
.sonos {
    opacity: 0;
    position: absolute;
    bottom: 50%;
    width: 100px;
    height: 100px;
    text-align: center;
    background-color: lightgray;
    border-top: solid 20px #f6f6f6;
    border-bottom: solid 20px #f6f6f6;
}

.muziek {
    animation: muziek 1s ease-in forwards;
    opacity: 1;
}

@keyframes muziek {
    0% {
        transform: translateY(-400%);
    }
    80% {
        transform: translateY(-105%)
    }
    90% {
        transform: translateY(-110%);
    }
    100% {
        transform: translateY(-105%);
    }
}
```

**Javascript**
```
var firstwomen = document.querySelector('#women0');
var sonos = document.querySelector('.sonos');

firstwomen.addEventListener('click', function () {
    sonos.classList.toggle('muziek');
})
```

### Bronnen

Scrollsnapping van Danny de Vries en **css-tricks.com/practical-css-scroll-snapping/**
Om me animaties beter te maken hebben ik **cubic-bezier.com** gebruikt.
Voor de vrouw die omdraait heb ik **animista.net** gebruikt.
