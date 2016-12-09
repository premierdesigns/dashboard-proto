import {Injectable} from '@angular/core';

const ORDERS = [{
  "id": 1,
  "firstName": "Joyce",
  "lastName": "Snyder",
  "email": "jsnyder0@cpanel.net",
  "payment": "diners-club-us-ca",
  "orderDate": "09/05/2016",
  "orderType": "Online",
  "orderStatus": "Open"
}, {
  "id": 2,
  "firstName": "Marie",
  "lastName": "Shaw",
  "email": "mshaw1@smugmug.com",
  "payment": "jcb",
  "orderDate": "10/17/2016",
  "orderType": "Online",
  "orderStatus": "Shipped"
}, {
  "id": 3,
  "firstName": "Andrew",
  "lastName": "Wallace",
  "email": "awallace2@mail.ru",
  "payment": "jcb",
  "orderDate": "07/02/2016",
  "orderType": "Individual",
  "orderStatus": "Shipped"
}, {
  "id": 4,
  "firstName": "Judith",
  "lastName": "Austin",
  "email": "jaustin3@phpbb.com",
  "payment": "americanexpress",
  "orderDate": "08/17/2016",
  "orderType": "Individual",
  "orderStatus": "Submitted"
}, {
  "id": 5,
  "firstName": "Marie",
  "lastName": "Watson",
  "email": "mwatson4@nbcnews.com",
  "payment": "jcb",
  "orderDate": "12/04/2016",
  "orderType": "Online",
  "orderStatus": "Open"
}, {
  "id": 6,
  "firstName": "Emily",
  "lastName": "Moreno",
  "email": "emoreno5@marketwatch.com",
  "payment": "jcb",
  "orderDate": "08/30/2016",
  "orderType": "Individual",
  "orderStatus": "Open"
}, {
  "id": 7,
  "firstName": "Lois",
  "lastName": "Morrison",
  "email": "lmorrison6@blinklist.com",
  "payment": "jcb",
  "orderDate": "10/22/2016",
  "orderType": "Jewelry Show",
  "orderStatus": "Errors"
}, {
  "id": 8,
  "firstName": "Heather",
  "lastName": "Boyd",
  "email": "hboyd7@i2i.jp",
  "payment": "americanexpress",
  "orderDate": "07/01/2016",
  "orderType": "Online",
  "orderStatus": "Errors"
}, {
  "id": 9,
  "firstName": "Chris",
  "lastName": "Bennett",
  "email": "cbennett8@posterous.com",
  "payment": "visa-electron",
  "orderDate": "09/20/2016",
  "orderType": "Individual",
  "orderStatus": "Errors"
}, {
  "id": 10,
  "firstName": "Alice",
  "lastName": "Henderson",
  "email": "ahenderson9@google.ca",
  "payment": "jcb",
  "orderDate": "06/26/2016",
  "orderType": "Jewelry Show",
  "orderStatus": "Open"
}, {
  "id": 11,
  "firstName": "Ralph",
  "lastName": "Webb",
  "email": "rwebba@hhs.gov",
  "payment": "maestro",
  "orderDate": "11/21/2016",
  "orderType": "Jewelry Show",
  "orderStatus": "Shipped"
}, {
  "id": 12,
  "firstName": "Carolyn",
  "lastName": "Hamilton",
  "email": "chamiltonb@tinypic.com",
  "payment": "diners-club-carte-blanche",
  "orderDate": "06/16/2016",
  "orderType": "Individual",
  "orderStatus": "Shipped"
}, {
  "id": 13,
  "firstName": "Carol",
  "lastName": "Williams",
  "email": "cwilliamsc@nyu.edu",
  "payment": "switch",
  "orderDate": "09/07/2016",
  "orderType": "Jewelry Show",
  "orderStatus": "Submitted"
}, {
  "id": 14,
  "firstName": "Jeremy",
  "lastName": "Fuller",
  "email": "jfullerd@twitter.com",
  "payment": "jcb",
  "orderDate": "08/14/2016",
  "orderType": "In Person",
  "orderStatus": "Shipped"
}, {
  "id": 15,
  "firstName": "Marilyn",
  "lastName": "Freeman",
  "email": "mfreemane@mapy.cz",
  "payment": "maestro",
  "orderDate": "11/02/2016",
  "orderType": "In Person",
  "orderStatus": "Submitted"
}, {
  "id": 16,
  "firstName": "Donald",
  "lastName": "Bishop",
  "email": "dbishopf@washington.edu",
  "payment": "jcb",
  "orderDate": "11/05/2016",
  "orderType": "Online",
  "orderStatus": "Processing"
}, {
  "id": 17,
  "firstName": "Wayne",
  "lastName": "Weaver",
  "email": "wweaverg@youku.com",
  "payment": "diners-club-us-ca",
  "orderDate": "07/13/2016",
  "orderType": "In Person",
  "orderStatus": "Shipped"
}, {
  "id": 18,
  "firstName": "Evelyn",
  "lastName": "Watkins",
  "email": "ewatkinsh@indiatimes.com",
  "payment": "jcb",
  "orderDate": "09/08/2016",
  "orderType": "In Person",
  "orderStatus": "Processing"
}, {
  "id": 19,
  "firstName": "Ronald",
  "lastName": "Wilson",
  "email": "rwilsoni@arstechnica.com",
  "payment": "laser",
  "orderDate": "10/09/2016",
  "orderType": "In Person",
  "orderStatus": "Submitted"
}, {
  "id": 20,
  "firstName": "Amanda",
  "lastName": "Dixon",
  "email": "adixonj@admin.ch",
  "payment": "jcb",
  "orderDate": "08/14/2016",
  "orderType": "Individual",
  "orderStatus": "Open"
}, {
  "id": 21,
  "firstName": "Martha",
  "lastName": "Elliott",
  "email": "melliottk@vkontakte.ru",
  "payment": "jcb",
  "orderDate": "11/01/2016",
  "orderType": "In Person",
  "orderStatus": "Errors"
}, {
  "id": 22,
  "firstName": "Antonio",
  "lastName": "Gray",
  "email": "agrayl@umn.edu",
  "payment": "jcb",
  "orderDate": "07/16/2016",
  "orderType": "Jewelry Show",
  "orderStatus": "Shipped"
}, {
  "id": 23,
  "firstName": "Andrew",
  "lastName": "Dean",
  "email": "adeanm@nih.gov",
  "payment": "jcb",
  "orderDate": "09/29/2016",
  "orderType": "Online",
  "orderStatus": "Processing"
}, {
  "id": 24,
  "firstName": "Karen",
  "lastName": "Simmons",
  "email": "ksimmonsn@wsj.com",
  "payment": "diners-club-carte-blanche",
  "orderDate": "06/03/2016",
  "orderType": "Online",
  "orderStatus": "Errors"
}, {
  "id": 25,
  "firstName": "Juan",
  "lastName": "Reid",
  "email": "jreido@netlog.com",
  "payment": "jcb",
  "orderDate": "06/25/2016",
  "orderType": "Jewelry Show",
  "orderStatus": "Errors"
}];

@Injectable()
export class OrderService {

  constructor() {
  }

  getOrders() {
    return ORDERS;
  }

}
