import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css'
})
export class MainPageComponent {

    public personajes: Personaje[] = [
        {
            nombre: "Goku",
            poder: 15000
        },
        {
            nombre: "Vegeta",
            poder: 7500
        }
    ]
    public nuevo: Personaje = { nombre: "", poder: 0 }

    


}
