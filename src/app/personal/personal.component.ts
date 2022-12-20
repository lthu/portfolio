import { Component } from '@angular/core';
import { AboutImage } from '../project';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  selectedImage: string;

  onSelect(imageGallery : number): void {
  
    switch (imageGallery) {
      case 0:
        this.selectedImage = this.lumikenkaKuvat[0].name
        break;
      case 1:
        this.selectedImage = this.pyoraKuvat[0].name
        break;
      default:
        break;
    }
  }
  
  lumikenkaKuvat: AboutImage[] = [{id: 1, name: 'lumikenka.jpg' }, {id : 2, name: 'lumikenka2.jpg'} ];
  pyoraKuvat: AboutImage[] = [{id: 1, name: 'pyor1.jpg' }, {id : 2, name: 'lumikenka2.jpg'} ];

}
