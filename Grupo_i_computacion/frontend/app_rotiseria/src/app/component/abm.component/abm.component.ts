import { Component, Input } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  // 👈 Selector basado en el ejemplo del profesor
  selector: 'app-abm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // 👈 Nombres de archivo estandarizados
  templateUrl: './abm.component.html', 
  styleUrl: './abm.component.css'    
})
// 👈 Nombre de la clase basado en el ejemplo del profesor
export class AbmComponent { 

    // Inputs para hacerlo reutilizable
    @Input() title: string = 'Formulario'; 
    @Input() btnText: string = 'Guardar'; 
    
    // Campos genéricos
    @Input() field1Value: string = '';
    @Input() field2Value: string = '';
    @Input() field3Value: string = '';
    
    // Placeholders genéricos (actúan como los títulos)
    @Input() field1Placeholder: string = 'Campo 1';
    @Input() field2Placeholder: string = 'Campo 2';
    @Input() field3Placeholder: string = 'Campo 3';

    // Control de visibilidad de la modal
    show: boolean = false; 

    constructor() {}

    open(): void {
        this.show = true;
    }

    close(): void {
        this.show = false;
    }

    // Por ahora, solo simula la acción
    onSubmit(): void {
        console.log('Botón ' + this.btnText + ' presionado. Acción inactiva.');
        this.close();
    }
}