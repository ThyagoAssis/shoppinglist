import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ContatoPageRoutingModule } from "./contato-routing.module";

import { ContatoPage } from "./contato.page";
import { HeaderModule } from "src/app/componentes/header/header.module";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        IonicModule,
        ContatoPageRoutingModule,
        HeaderModule
    ],
    declarations: [ContatoPage]
})
export class ContatoPageModule{}