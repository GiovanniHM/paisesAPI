import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-cpais',
  templateUrl: './por-cpais.component.html',
  styleUrls: ['./por-cpais.component.css'],
})
export class PorCPaisComponent implements OnInit {
  termino: string = '';
  errorM: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.errorM = false;
    this.termino = termino
    console.log(this.termino);
    this.paisService.buscarPais(this.termino, 'name').subscribe(
      (resp) => {
        console.log(resp);
        this.paises = resp;
      },
      (err) => {
        console.log('Error');
        console.log(err);
        this.errorM = true;
        this.paises = [];

      }
    );
  }


  sugerencias(termino: string){
    this.errorM = false;
    this.termino = termino;
    this.mostrarSugerencias = true

    this.paisService.buscarPais(termino, 'name')
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (error) =>this.paisesSugeridos = [])

    this.termino = termino;
  }

  buscarSugerido(termino: string){
    this.buscar(termino);
    this.termino = '';
  }

}
