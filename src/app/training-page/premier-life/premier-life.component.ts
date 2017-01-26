import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pd-premier-life',
  templateUrl: './premier-life.component.html',
  styleUrls: ['./premier-life.component.less']
})
export class PremierLifeComponent implements OnInit {
  public videos : Array<any> = [
    {
      "title": "Premier Life Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Premier Life Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Premier Life Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Premier Life Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    },
    {
      "title": "Premier Life Video Title",
      "summary": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      "previewImage": "http://placehold.it/250x100"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
