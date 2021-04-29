import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit  {



  //Emitir termino enter
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeH: string;

  deboncer: Subject<string> = new Subject();





 termino: string = '';

 ngOnInit(): void {
    this.deboncer
    .pipe(
      debounceTime(300))
    .subscribe(valor =>{
      this.onDebunce.emit(valor)
    });
}

 buscar(){
  this.onEnter.emit(this.termino);
 }

 teclaPresionada(event: any){
  this.deboncer.next(this.termino);
 }

}
