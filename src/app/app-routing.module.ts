import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhrasesComponent } from './components/phrases/phrases.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';

const routes: Routes = [
  {path: 'phrases', component: PhrasesComponent},
  {path: 'vocabulary', component: VocabularyComponent},
  {path: '', component: PhrasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
