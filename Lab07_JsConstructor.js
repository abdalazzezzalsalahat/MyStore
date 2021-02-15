
'use strict';

const times = ['6 am:   '
            ,'7 am:   '
            ,'8 am:   '
            ,'9 am:   '
            ,'10 am:   '
            ,'11 am:   '
            ,'12 pm:   '
            ,'1 pm:   '
            ,'2 pm:   '
            ,'3 pm:   '
            ,'4 pm:   '
            ,'5 pm:   '
            ,'6 pm:   '
            ,'7 pm:   '];

function randomNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function Store (place, min, max, avg, cookiesPerHour, totalSales) {
    this.place = place;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesPerHour = cookiesPerHour;
    this.totalSales = totalSales;
    Store.prototype.getCookiesPH = function (){
        for (let i = 0; i< times.length; i++){
            const cPerH = Math.floor(randomNumbers(this.min, this.max) * this.avg);
            this.totalSales += cPerH;
            this.cookiesPerHour.push(cPerH);
        }
    };
    Store.renderHead = function(){
        const tblHead = document.getElementById('tblHead');
        const tHeadRow = document.createElement('tr');
        tblHead.appendChild(tHeadRow);
        const hFrstE = document.createElement('th');
        tHeadRow.appendChild(hFrstE);
        hFrstE.textContent = 'Location ';
        for (let k = 0; k< times.length; k++){
            const tHeadData = document.createElement('th');
            tHeadRow.appendChild(tHeadData);
            tHeadData.textContent = `${times[k]}`;
        }
        const hTotal = document.createElement('th');
        tHeadRow.appendChild(hTotal);
        hTotal.textContent = 'Daily Total';
    };
    Store.prototype.renderBody = function() {
        this.getCookiesPH();
        const tblBody = document.getElementById('tblBody');
        const tBodyRow = document.createElement('tr');
        tblHead.appendChild(tBodyRow);
        const tFirstCol = document.createElement('td');
        tBodyRow.appendChild(tFirstCol);
        tFirstCol.textContent = `${this.place}`;
        for (let c = 0; c < times.length; c++){
            const tBodyData = document.createElement('td');
            tBodyRow.appendChild(tBodyData);
            tBodyData.textContent = `${this.cookiesPerHour[c]}`;
        }
        const tLastCol = document.createElement('td');
        tBodyRow.appendChild(tLastCol);
        tLastCol.textContent = `${this.totalSales}`;
    };
    Store.renderFooter = function(){
        const tblFoot = document.getElementById('tblFoot');
        const tFootRow = document.createElement('tr');
        tblFoot.appendChild(tFootRow);
        const fFirstCol = document.createElement('th');
        tFootRow.appendChild(fFirstCol);
        fFirstCol.textContent = 'Hourly total';
        for(let r = 0; r < times.length; r++){
            const summation = 0;
            summation += this.cookiesPerHour[r];
            const tBodyCol = document.createElement('th');
            tFootRow.appendChild(tBodyCol);
            tBodyCol.textContent = summation;
        }
        const fullSum = 0;        
    }
}

const seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
const tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
const dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
const paris = new Store('Paris', 20, 38, 2.3, [], 0);
const lima = new Store('Lima', 2, 16, 4.6, [], 0);

Store.renderHead();
seattle.renderBody();
tokyo.renderBody();
dubai.renderBody();
paris.renderBody();
lima.renderBody();
Store.renderFooter();