import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.less']
})
export class BookingComponent implements OnInit {
  public videos : Array<any> = [
    {
      "title": "Booking Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Booking Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Booking Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Booking Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Booking Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
