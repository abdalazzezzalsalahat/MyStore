
'use strict';

const times = ['6 am: '
            ,'7am: '
            ,'8 am: '
            ,'9 am: '
            ,'10 am: '
            ,'11 am: '
            ,'12 pm: '
            ,'1 pm: '
            ,'2 pm: '
            ,'3 pm: '
            ,'4 pm: '
            ,'5 pm: '
            ,'6 pm: '
            ,'7 pm: '];

function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
    place: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesPerHour: [],
    totalSales: 0,
    getCookiesPH: function (){
        for (let i = 0; i< times.length; i++){
            const cPerH = Math.floor(randomNumbers(this.min, this.max) * this.avg);
            this.totalSales += cPerH;
            this.cookiesPerHour.push(cPerH);
        }
    },
    render: function() {
        this.getCookiesPH();
        const sec = document.getElementById('bodySection');
        const title = document.createElement('h2');
        sec.appendChild(title);
        title.textContent = this.place;
        const uList = document.createElement('ul');
        sec.appendChild(uList);
        for(let c = 0; c < times.length; c++){
            const list = document.createElement('li');
            uList.appendChild(list);
            list.textContent = `${times[c]} ` + this.cookiesPerHour[c] + ' cookies';
        }
        const total = document.createElement('li');
        uList.appendChild(total);
        total.textContent= `Total ${this.totalSales} cookies`;
        total.style.fontWeight = 'bold';
        total.style.fontSize = '20px';
    },
};
const tokyo = {
    place: 'Tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesPerHour: [],
    totalSales: 0,
    getCookiesPH: function (){
        for (let i = 0; i< times.length; i++){
            const cPerH = Math.floor(randomNumbers(this.min, this.max) * this.avg);
            this.totalSales += cPerH;
            this.cookiesPerHour.push(cPerH);
        }
    },
    render: function() {
        this.getCookiesPH();
        const sec = document.getElementById('bodySection');
        const title = document.createElement('h2');
        sec.appendChild(title);
        title.textContent = this.place;
        const uList = document.createElement('ul');
        sec.appendChild(uList);
        for(let c = 0; c < times.length; c++){
            const list = document.createElement('li');
            uList.appendChild(list);
            list.textContent = `${times[c]} ` + this.cookiesPerHour[c] + ' cookies';
        }
        const total = document.createElement('li');
        uList.appendChild(total);
        total.textContent= `Total ${this.totalSales} cookies`;
        total.style.fontWeight = 'bold';
        total.style.fontSize = '20px';
    },
};
const dubai = {
    place: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesPerHour: [],
    totalSales: 0,
    getCookiesPH: function (){
        for (let i = 0; i< times.length; i++){
            const cPerH = Math.floor(randomNumbers(this.min, this.max) * this.avg);
            this.totalSales += cPerH;
            this.cookiesPerHour.push(cPerH);
        }
    },
    render: function() {
        this.getCookiesPH();
        const sec = document.getElementById('bodySection');
        const title = document.createElement('h2');
        sec.appendChild(title);
        title.textContent = this.place;
        const uList = document.createElement('ul');
        sec.appendChild(uList);
        for(let c = 0; c < times.length; c++){
            const list = document.createElement('li');
            uList.appendChild(list);
            list.textContent = `${times[c]} ` + this.cookiesPerHour[c] + ' cookies';
        }
        const total = document.createElement('li');
        uList.appendChild(total);
        total.textContent= `Total ${this.totalSales} cookies`;
        total.style.fontWeight = 'bold';
        total.style.fontSize = '20px';
    },
};
const paris = {
    place: 'Paris',
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesPerHour: [],
    totalSales: 0,
    getCookiesPH: function (){
        for (let i = 0; i< times.length; i++){
            const cPerH = Math.floor(randomNumbers(this.min, this.max) * this.avg);
            this.totalSales += cPerH;
            this.cookiesPerHour.push(cPerH);
        }
    },
    render: function() {
        this.getCookiesPH();
        const sec = document.getElementById('bodySection');
        const title = document.createElement('h2');
        sec.appendChild(title);
        title.textContent = this.place;
        const uList = document.createElement('ul');
        sec.appendChild(uList);
        for(let c = 0; c < times.length; c++){
            const list = document.createElement('li');
            uList.appendChild(list);
            list.textContent = `${times[c]} ` + this.cookiesPerHour[c] + ' cookies';
        }
        const total = document.createElement('li');
        uList.appendChild(total);
        total.textContent= `Total ${this.totalSales} cookies`;
        total.style.fontWeight = 'bold';
        total.style.fontSize = '20px';
    },
};
const lima = {
    place: 'Lima',
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesPerHour: [],
    totalSales: 0,
    getCookiesPH: function (){
        for (let i = 0; i< times.length; i++){
            const cPerH = Math.floor(randomNumbers(this.min, this.max) * this.avg);
            this.totalSales += cPerH;
            this.cookiesPerHour.push(cPerH);
        }
    },
    render: function() {
        this.getCookiesPH();
        const sec = document.getElementById('bodySection');
        const title = document.createElement('h2');
        sec.appendChild(title);
        title.textContent = this.place;
        const uList = document.createElement('ul');
        sec.appendChild(uList);
        for(let c = 0; c < times.length; c++){
            const list = document.createElement('li');
            uList.appendChild(list);
            list.textContent = `${times[c]} ` + this.cookiesPerHour[c] + ' cookies';
        }
        const total = document.createElement('li');
        uList.appendChild(total);
        total.textContent= `Total ${this.totalSales} cookies`;
        total.style.fontWeight = 'bold';
        total.style.fontSize = '20px';
    },
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

