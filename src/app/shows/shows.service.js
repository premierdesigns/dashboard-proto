"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SHOWS = [{
        "showID": 1,
        "hostPicture": "https://robohash.org/numquammagnamfacilis.png?size=50x50&set=set1",
        "hostessFirstName": "Julie",
        "hostessLastName": "Peterson",
        "email": "jpeterson0@live.com",
        "phone": "1-(702)236-9214",
        "locationAddress": "7 Manley Lane",
        "locationCity": "Las Vegas",
        "locationState": "NV",
        "locationZip": "89155",
        "locationCountry": "US",
        "guestCount": 49,
        "showDate": "9/24/2016"
    }, {
        "showID": 2,
        "hostPicture": "https://robohash.org/iddolorrepellat.png?size=50x50&set=set1",
        "hostessFirstName": "Linda",
        "hostessLastName": "Morris",
        "email": "lmorris1@huffingtonpost.com",
        "phone": "1-(727)286-5608",
        "locationAddress": "06898 Messerschmidt Street",
        "locationCity": "Largo",
        "locationState": "FL",
        "locationZip": "34643",
        "locationCountry": "US",
        "guestCount": 38,
        "showDate": "10/18/2016"
    }, {
        "showID": 3,
        "hostPicture": "https://robohash.org/suntsedvel.png?size=50x50&set=set1",
        "hostessFirstName": "Karen",
        "hostessLastName": "Austin",
        "email": "kaustin2@java.com",
        "phone": "1-(661)413-5420",
        "locationAddress": "68817 Pennsylvania Street",
        "locationCity": "Bakersfield",
        "locationState": "CA",
        "locationZip": "93386",
        "locationCountry": "US",
        "guestCount": 41,
        "showDate": "11/10/2016"
    }, {
        "showID": 4,
        "hostPicture": "https://robohash.org/porrononminus.png?size=50x50&set=set1",
        "hostessFirstName": "Barbara",
        "hostessLastName": "Hunter",
        "email": "bhunter3@chronoengine.com",
        "phone": "1-(412)638-0535",
        "locationAddress": "6 School Street",
        "locationCity": "Pittsburgh",
        "locationState": "PA",
        "locationZip": "15225",
        "locationCountry": "US",
        "guestCount": 27,
        "showDate": "3/24/2017"
    }, {
        "showID": 5,
        "hostPicture": "https://robohash.org/autmaiorespossimus.png?size=50x50&set=set1",
        "hostessFirstName": "Mildred",
        "hostessLastName": "Harrison",
        "email": "mharrison4@bing.com",
        "phone": "1-(212)797-8920",
        "locationAddress": "33799 Forest Run Hill",
        "locationCity": "New York City",
        "locationState": "NY",
        "locationZip": "10249",
        "locationCountry": "US",
        "guestCount": 3,
        "showDate": "1/7/2016"
    }, {
        "showID": 6,
        "hostPicture": "https://robohash.org/doloreinciduntdebitis.png?size=50x50&set=set1",
        "hostessFirstName": "Amanda",
        "hostessLastName": "Frazier",
        "email": "afrazier5@wikimedia.org",
        "phone": "1-(970)107-2382",
        "locationAddress": "44546 Packers Way",
        "locationCity": "Greeley",
        "locationState": "CO",
        "locationZip": "80638",
        "locationCountry": "US",
        "guestCount": 14,
        "showDate": "10/5/2016"
    }, {
        "showID": 7,
        "hostPicture": "https://robohash.org/rerumculpadoloribus.png?size=50x50&set=set1",
        "hostessFirstName": "Marie",
        "hostessLastName": "Howell",
        "email": "mhowell6@nydailynews.com",
        "phone": "1-(469)929-6551",
        "locationAddress": "50 Monterey Trail",
        "locationCity": "Dallas",
        "locationState": "TX",
        "locationZip": "75342",
        "locationCountry": "US",
        "guestCount": 18,
        "showDate": "1/13/2017"
    }, {
        "showID": 8,
        "hostPicture": "https://robohash.org/sintveniamassumenda.png?size=50x50&set=set1",
        "hostessFirstName": "Sara",
        "hostessLastName": "Watkins",
        "email": "swatkins7@clickbank.net",
        "phone": "1-(206)330-6988",
        "locationAddress": "5728 Lotheville Drive",
        "locationCity": "Tacoma",
        "locationState": "WA",
        "locationZip": "98424",
        "locationCountry": "US",
        "guestCount": 45,
        "showDate": "4/7/2017"
    }, {
        "showID": 9,
        "hostPicture": "https://robohash.org/etmolestiassapiente.png?size=50x50&set=set1",
        "hostessFirstName": "Martha",
        "hostessLastName": "Shaw",
        "email": "mshaw8@dailymotion.com",
        "phone": "1-(816)384-7158",
        "locationAddress": "8 Moulton Place",
        "locationCity": "Kansas City",
        "locationState": "MO",
        "locationZip": "64149",
        "locationCountry": "US",
        "guestCount": 20,
        "showDate": "10/29/2016"
    }, {
        "showID": 10,
        "hostPicture": "https://robohash.org/voluptatesmolestiaerepellat.png?size=50x50&set=set1",
        "hostessFirstName": "Helen",
        "hostessLastName": "Sanchez",
        "email": "hsanchez9@umn.edu",
        "phone": "1-(918)742-5841",
        "locationAddress": "96693 Coolidge Alley",
        "locationCity": "Tulsa",
        "locationState": "OK",
        "locationZip": "74103",
        "locationCountry": "US",
        "guestCount": 6,
        "showDate": "1/10/2017"
    }];
var ShowsService = (function () {
    function ShowsService() {
    }
    ShowsService.prototype.getShows = function () {
        return SHOWS;
    };
    return ShowsService;
}());
ShowsService = __decorate([
    core_1.Injectable()
], ShowsService);
exports.ShowsService = ShowsService;
