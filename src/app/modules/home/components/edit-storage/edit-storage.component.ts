import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/core/models/product.enum';
import { StorageService } from 'src/app/core/services/storage.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
	selector: 'app-edit-storage',
	templateUrl: './edit-storage.component.html',
	styleUrls: [ './edit-storage.component.scss' ]
})
export class EditStorageComponent implements OnInit {
	productEnum = Product;
	productKey = Object.keys(Product);

	form: FormGroup = this.fb.group({
		storage: [ this.data.storage, [ Validators.required ] ],
		max_capacity: [ this.data.max_capacity, [ Validators.required, Validators.min(0) ] ],
		product_amount: [ this.data.product_amount, [ Validators.required, Validators.min(0) ] ],
		product: [ this.data.product, [ Validators.required ] ],
		storage_key: [ this.data.storage_key ]
	});

	constructor(
		private storage: StorageService,
		private toast: ToastService,
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<EditStorageComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	onSubmit() {
		Object.keys(this.form.controls).forEach((c) => this.form.get(c).markAsTouched());
		if (this.form.valid) {
			this.storage.put(this.form.value).subscribe(
				(res) => {
					this.toast.successMessage('Product saved!');
					this.dialogRef.close();
				},
				(err) => {
					this.toast.errorMessage(err);
				}
			);
		}
	}

	checkCapacity() {
		if (this.form.controls.product_amount.invalid) return;
		if (this.form.controls.product_amount.value > this.form.controls.max_capacity.value) {
			this.form.controls.product_amount.setErrors({ max: true });
		} else {
			this.form.controls.product_amount.setErrors(null);
		}
	}

	ngOnInit() {}
}
