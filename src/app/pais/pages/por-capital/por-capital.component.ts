import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  //Initial variables
  termino: string = '';
  errorM: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}


  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.errorM = false;
    this.termino = termino
    console.log(this.termino);
    this.paisService.buscarPais(this.termino,'capital').subscribe(
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
  }

}
