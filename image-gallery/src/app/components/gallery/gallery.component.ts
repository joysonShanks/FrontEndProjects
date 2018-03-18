import { Component, OnInit } from '@angular/core';

const baseUrl = "https://homepages.cae.wisc.edu/~ece533/images/";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  tiles = [
    {text: 'Airplane', cols: 3, rows: 1, color: 'lightblue', url: baseUrl + 'airplane.png'},
    {text: 'Architecture', cols: 1, rows: 2, color: 'lightgreen', url: baseUrl + 'arctichare.png'},
    {text: 'Baboon', cols: 1, rows: 1, color: 'lightpink', url: baseUrl + 'baboon.png'},
    {text: 'Boat', cols: 2, rows: 1, color: '#DDBDF1', url: baseUrl + 'boat.png'},
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
