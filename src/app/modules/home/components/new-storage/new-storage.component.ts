import { ToastService } from 'src/app/core/services/toast.service';
import { StorageService } from './../../../../core/services/storage.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/core/models/product.enum';

@Component({
  selector: 'app-new-storage',
  templateUrl: './new-storage.component.html',
  styleUrls: ['./new-storage.component.scss'],
  outputs: ['refresh']
})
export class NewStorageComponent implements OnInit {
  productEnum = Product;
  productKey = Object.keys(Product);

  form: FormGroup = this.fb.group({
    storage: ['', [Validators.required]],
    max_capacity: ['', [Validators.required]],
    product_amount: ['', [Validators.required]],
    product: ['', [Validators.required]]
  });
  constructor(
    private storage: StorageService,
    private toast: ToastService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewStorageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    Object.keys(this.form.controls).forEach(c =>
      this.form.get(c).markAsTouched()
    );
    if (this.form.valid) {
      this.storage.post(this.form.value).subscribe(
        res => {
          this.toast.successMessage('Product saved!');
          this.dialogRef.close();
        },
        err => {
          this.toast.errorMessage(err);
        }
      );
    }
  }

  checkCapacity() {
    if (
      this.form.controls.product_amount.value >=
      this.form.controls.max_capacity.value
    ) {
      this.form.controls.product_amount.setValue(
        this.form.controls.max_capacity.value
      );
    }
  }

  ngOnInit() {}
}
