import { Component, OnInit } from '@angular/core';
import { AboutImage } from '../project';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  selectedImage: string;

  ngOnInit(): void {
    var rand = Math.floor(Math.random() * 10);
    this.selectedImage = this.lauriKuvat[rand].name;
  }


  onSelect(imageGallery : number): void {
    switch (imageGallery) {
      case 0:
        this.selectedImage = this.pyoraKuvat[0].name
        break;
      case 1:
        this.selectedImage = this.lumikenkaKuvat[0].name
        break;
      default:
        break;
    }
  }
  
  
  lumikenkaKuvat: AboutImage[] = [{id: 1, name: 'lumikenka.jpg' }, {id : 2, name: 'lumikenka2.jpg'} ];
  pyoraKuvat: AboutImage[] = [{id: 1, name: 'pyor1.jpg' }, {id : 2, name: 'lumikenka2.jpg'} ];
  lauriKuvat: AboutImage[] = [{id: 1, name: 'lauri.jpg' }, {id : 2, name: 'lauri2.jpg'}, {id : 3, name: 'lauri3.jpg'}, {id : 3, name: 'lauri3.jpg'}, {id : 4, name: 'lauri4.jpg'}, {id : 5, name: 'lauri5.jpg'}, {id : 6, name: 'lauri6.jpg'}, {id : 7, name: 'lauri7.jpg'}, {id : 8, name: 'lauri8.jpg'}, {id : 9, name: 'lauri9.jpg'} ];
  
}
