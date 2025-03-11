import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nombres } from '../datos';

@Component({
  selector: 'app-hijo',
  standalone:true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() candidates:string[]=[];
  
  @Output() vote:EventEmitter<number>= new EventEmitter<number>();
  
  voteCandidate(index:number){
    this.vote.emit(index);
  }

}
