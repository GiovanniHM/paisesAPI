import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorCPaisComponent } from './pages/por-cpais/por-cpais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorCPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent,
  ],
  exports: [
    PorCapitalComponent,
    PorCPaisComponent,
    PorRegionComponent,
    VerPaisComponent,
  ],
  imports: [CommonModule,
            FormsModule,
            RouterModule

  ],
})
export class PaisModule {}
