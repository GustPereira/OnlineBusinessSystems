import { Component, OnInit, Inject } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditStorageComponent } from '../edit-storage/edit-storage.component';

@Component({
  selector: 'app-delete-storage',
  templateUrl: './delete-storage.component.html',
  styleUrls: ['./delete-storage.component.scss']
})
export class DeleteStorageComponent implements OnInit {
  constructor(
    private storage: StorageService,
    private toast: ToastService,
    public dialogRef: MatDialogRef<EditStorageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.storage.delete(this.data.storage_key).subscribe(
      res => {
        this.toast.successMessage('Product deleted!');
        this.dialogRef.close();
      },
      err => {
        this.toast.errorMessage(err);
      }
    );
  }

  ngOnInit() {}
}
