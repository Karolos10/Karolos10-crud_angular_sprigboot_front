import { Component, OnInit } from '@angular/core';
import { cardModel } from '../../model/card-model';
import { CardService } from '../../service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent implements OnInit{

  listCards: cardModel[] = [];
  constructor(private cardService: CardService){}

  ngOnInit(): void {

    this.list();
      
  }

  list(){
    this.cardService.getCards().subscribe( resp => {
      if(resp){
        this.listCards = resp;
      }
    });
  }

}
