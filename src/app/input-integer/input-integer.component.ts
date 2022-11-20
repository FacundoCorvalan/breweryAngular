import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

 /* Un operador de aserción no nulo. Se utiliza para afirmar que el operando no es nulo ni indefinido
 en contextos en los que el verificador de tipos no puede concluir ese hecho. */
  @Input()
  quantity!: number;
 
  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else
    this.maxReached.emit("se alcanzó el max");
  }

  changeQuantity(event: any): void{ 
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
