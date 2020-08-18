import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PhrasesComponent } from './components/phrases/phrases.component';
import { VocabularyComponent } from './components/vocabulary/vocabulary.component';

@NgModule({
  declarations: [
    AppComponent,
    PhrasesComponent,
    VocabularyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
