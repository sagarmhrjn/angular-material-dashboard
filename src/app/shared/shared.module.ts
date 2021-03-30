import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AreaComponent,
        CardComponent,
        PieComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HighchartsChartModule,
        RouterModule,

        HttpClientModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        AreaComponent,
        CardComponent,
        PieComponent,

        MaterialModule,
        HighchartsChartModule,
        HttpClientModule
    ],
})
export class SharedModule { }
