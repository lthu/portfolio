import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WorkComponent } from './work/work.component';
import { SchoolComponent } from './school/school.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutmeComponent,
    WorkComponent,
    SchoolComponent,
    PersonalComponent,
    ContactComponent
  ],
  imports: [
    
    NgbAccordionModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutmeComponent,
      children: [
        {path: 'work', component: WorkComponent},
        {path: 'personal', component: PersonalComponent},
        {path: 'school', component: SchoolComponent},
      ] },
      {path: 'projects', component: ProjectsComponent},
      {path: 'contact', component: ContactComponent},
      {path: '**', redirectTo: 'about/personal'}
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
