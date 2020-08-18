import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SentencesService } from '../../../services/sentences.service';

@Component({
  selector: 'app-phrases',
  templateUrl: './phrases.component.html',
  styleUrls: ['./phrases.component.scss']
})
export class PhrasesComponent implements OnInit {
  @ViewChild('secItem', {read: ElementRef}) tref:ElementRef;

  title = 'german-practice';
  germanList = [];
  translationList = [];

  constructor(private sentences: SentencesService) { 
    this.sentences.getQuote().subscribe(data=>{this.germanList = [...data]
      this.translationList = [...this.germanList];
      this.translationList = this.shuffle(this.translationList);
     });
  }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    //moveItemInArray(this.germanList, event.previousIndex, event.currentIndex);
    //console.log(event.currentIndex);
    let oldtarget = this.germanList[event.previousIndex];
    this.germanList[event.previousIndex] = this.germanList[event.currentIndex];
    this.germanList[event.currentIndex] = oldtarget;
  }
  
  shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

  check(){
   // console.log(this.germanList.indexOf(item));
   // console.log(item.translation);
    for(let i = 0; i<this.translationList.length; i++){
      if(this.germanList[i]==this.translationList[i]){
        this.tref.nativeElement.children[i].style.background = "green";
      }
      else
      this.tref.nativeElement.children[i].style.background = "red";
      //console.log("Error at index "+i);
    }

  }

  next(){
    this.sentences.getQuote().subscribe(data=>{this.germanList = [...data]
      this.translationList = [...this.germanList];
      this.translationList = this.shuffle(this.translationList);
     });
     
  }

}
