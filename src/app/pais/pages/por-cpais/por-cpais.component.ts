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
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar() {
    this.errorM = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(
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
}
