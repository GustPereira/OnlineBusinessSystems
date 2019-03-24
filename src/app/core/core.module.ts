import { GlobalStateService } from './services/global-state.service';
import { AppMaterialModule } from './../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ToastService } from './services/toast.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, AppMaterialModule, RouterModule],
  providers: [ToastService, GlobalStateService],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class CoreModule {}
