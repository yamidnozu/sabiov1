import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDividerModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatDividerModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatDividerModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [
    ]
})
export class MaterialModule { }
