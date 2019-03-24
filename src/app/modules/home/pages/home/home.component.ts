import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { IStorages } from 'src/app/core/models/storage';
import { MatDialog } from '@angular/material';
import { NewStorageComponent } from '../../components/new-storage/new-storage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storages: IStorages = { success: null, message: null, data: [] };

  constructor(
    private toast: ToastService,
    private storage: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.storage.list().subscribe(
      res => {
        this.storages = res as IStorages;
      },
      err => {
        console.log(err);
        this.toast.errorMessage(err);
      }
    );
  }

  onRefresh() {
    this.loadData();
  }

  openDialogNew(): void {
    const dialogRef = this.dialog.open(NewStorageComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }
}
