import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { QualificationComponent } from './qualification/qualification.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:"career", component:CareerComponent},
  {path:"qualification", component:QualificationComponent},
  {path:"exp", component:ExperienceComponent},
  {path:"skills", component:SkillComponent},
  {path:"contact", component:ContactComponent},
  {path: '',   redirectTo: '/career', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
