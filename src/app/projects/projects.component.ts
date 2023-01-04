import { Project } from '../project';
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
  
	
})
export class ProjectsComponent {
  buttonStates: boolean[];
  constructor() {
    this.buttonStates = [];
    
    for (let i = 0; i < this.projects.length; i++) {
      this.buttonStates.push(false);
    }
  }  
  booleanTest: boolean = true;

  projects: Project[] = [
    {id: 1, name: "Java", description: "Java oli ensimmäinen koodikieli, jolla opettelin olio-ohjelmoinnin perusteita. Harjoitustyönä eräällä opintojaksolla tein laivanupotuspelin, joka sisälsi graafisen käyttöliittymän. Pelin tietokonevastus sisälsi logiikan, jolla se saadessaan osuman alukseen, alkoi ampuaan viereisiä ruutuja. Koodin laatu ei ole parhaasta päästä ja olenkin miettinyt toteuttaa peliprojektin eri tekniikoilla.", images: [{name: "battleships.png", altText: "Pelissä on toimiva tietokonevastus, joka arpoo jokaisen ammuksen!"}, {name: "battleships2.png", altText: "Käyttäjä asettaa omat aluksensa graafisen käyttöliittymän alussa. Pelin koodi löytyy GitHubista"}]},
    {id: 2, name: "C#", description: "C#-kieleen tutustuin Lapin AMKiin tultuani. Unity-peliohjelmoinnin kurssilla C# oli oleellisena osana käytössä. Myös olio-ohjelmoinnin kurssilla käytettiin C#-kieltä.", images: [{name: "kuva2.png", altText: "Unity-projekti työn alla"}]},
    {id: 3, name: "Angular", description: "TAMKin ohjelmistotuotannon uudet suuntaukset -opintojaksolla perehdyin Angular-kieleen ja tykästyin siihen. Kurssilla tein HomeLibrary-nimisen luettelon fyysisille kirjoille. Tietokantana käytin koulun MySQL:ää ja Herokussa pyöri nodejs:llä tehty API. Docker tuli myös hieman tutuksi, kun pystytin ympäristöä.", images: [{name: "hl1.png", altText: "Kuvankaappaus HomeLibraryn kirjan lisäys -kohdasta." }, {name: "hl2.png", altText: "Kirjojen listaus HomeLibraryssa."}] },
    {id: 4, name: "Blender", description: "Blenderiä olen käyttänyt jo useamman vuoden erilaisiin 3D-mallinnushommiin. Kuvassa on mallinnus, jossa talo on tehty ArchiCadilla ja lopullinen renderöinti Blenderillä.", images: [{name: "rusko1.png", altText: "Kuusamo Hirsitalojen Rusko-mallin pohjalta tehty mallinnus."}, {name: "rusko2.png", altText: ""}]},
    {id: 5, name: "Source Engine", description: "Half-Life 2 -pelimodifikaatio oli ystäväni kanssa tehty projekti, jossa hyödynsimme Valven kehittämää source-pelimoottoria. Projektiin kuului osaltani 3D-mallinnusta ja teksturointia sekä animointia, pelimoottorin kustomointia ja ominaisuuksien lisäämistä (C++). Hyödynsimme projektissamme SVN-versionhallintajärjestelmää ja dokumentoimme projektin edistystä Redmine-projektinhallintaohjelmistolla. ", images: [{name: "rusko1.png", altText: "Kuusamo Hirsitalojen Rusko-mallin pohjalta tehty mallinnus."}, {name: "rusko2.png", altText: ""}]},
  ]

  selectedProject?: Project;
  onSelect(project : Project, id: number): void {
    this.selectedProject = project;
    this.resetButtons();
    this.buttonStates[id] = !this.buttonStates[id];
  }
  resetButtons() : void {
    for (let i = 0; i < this.buttonStates.length; i++) {
      this.buttonStates[i] = false;
    }
  }
}
