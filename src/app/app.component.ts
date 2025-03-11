import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { Nombres } from './datos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Votaciones';

  final:boolean=false;

  result:string="";
  
  candidateNames:string[]=[
    "Karla Rosas", "Lorenzo Estrada", "Benito Landa"
  ]

  candVotes1:number=0;
  candVotes2:number=0;
  candVotes3:number=0;

  showWinner:boolean=false;

  onVote(candidateIndex:number){
    switch(candidateIndex){
      case 0:
        this.candVotes1++;
        break;
      case 1:
        this.candVotes2++;
        break;
      case 2:
        this.candVotes3++;
        break;
    }
    this.showWinner =true;
  }

  finalElection(){

    this.final=true;
    
    if(this.candVotes1 === 0 && this.candVotes2===0 && this.candVotes3 === 0){
      this.result="No hay votos";
      return 0;
    }
    
    const maxVotes = Math.max(this.candVotes1, this.candVotes2, this.candVotes3);
    
    let countWinners:number=0;  
    let winners:string="";

    if(this.candVotes1 === maxVotes){
      winners= this.candidateNames[0];
      countWinners++;
    }

    if(this.candVotes2 === maxVotes){
      winners+= ((countWinners>0)?', ':'') + this.candidateNames[1];
      countWinners++;
    }
    
    if(this.candVotes3 == maxVotes){
      winners+= ((countWinners>0)?', ':'') + this.candidateNames[2];
      countWinners++;
    }

    if( countWinners>1){
      this.result='Empate entre: '+winners+ " con " + maxVotes + " votos cada uno";
    }else{
      this.result='Ganador: '+ winners+" con " +maxVotes+" votos";  
    }
  }
  
}