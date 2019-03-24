import { AppMaterialModule } from './../../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GaugeChartModule } from 'angular-gauge-chart';
import { GaugeComponent } from './components/gauge/gauge.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewStorageComponent } from './components/new-storage/new-storage.component';
import { EditStorageComponent } from './components/edit-storage/edit-storage.component';
import { DeleteStorageComponent } from './components/delete-storage/delete-storage.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    GaugeChartModule
  ],
  declarations: [
    HomeComponent,
    GaugeComponent,
    NewStorageComponent,
    EditStorageComponent,
    DeleteStorageComponent
  ],
  entryComponents: [
    NewStorageComponent,
    EditStorageComponent,
    DeleteStorageComponent
  ]
})
export class HomeModule {}
