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
    var rand = Math.floor(Math.random() * 4);
    this.selectedImage = this.lauriKuvat[rand].name;
  }
  returnRandom(rand: number) : number {
    return Math.floor(Math.random() * rand);
  }


  onSelect(imageGallery : number): void {
    switch (imageGallery) {
      case 0:
        this.selectedImage = this.pyoraKuvat[this.returnRandom(5)].name
        break;
      case 1:
        this.selectedImage = this.lumikenkaKuvat[0].name
        break;
      case 2:
        this.selectedImage = this.retkeilyKuvat[0].name
        break;
      default:
        break;
    }
  }
  
  
  retkeilyKuvat: AboutImage[] = [{id: 1, name: 'retkeily1.jpg' }];
  lumikenkaKuvat: AboutImage[] = [{id: 1, name: 'lumikenka.jpg' }, {id : 2, name: 'lumikenka2.jpg'} ];
  pyoraKuvat: AboutImage[] = [{id: 1, name: 'pyor1.jpg' }, {id : 2, name: 'pyor2.jpg'}, {id : 3, name: 'pyor3.jpg'}, {id : 4, name: 'pyor4.jpg'}, {id : 5, name: 'pyor5.jpg'} ];
  lauriKuvat: AboutImage[] = [{id: 1, name: 'profiili1.jpg' }, {id : 2, name: 'profiili2.jpg'}, {id : 3, name: 'profiili3.jpg'}, {id : 4, name: 'profiili4.jpg'}];
  
}
