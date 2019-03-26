import { IStorage } from './../../../../core/models/storage';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditStorageComponent } from '../edit-storage/edit-storage.component';
import { DeleteStorageComponent } from '../delete-storage/delete-storage.component';

@Component({
	selector: 'app-gauge',
	templateUrl: './gauge.component.html',
	styleUrls: [ './gauge.component.scss' ],
	inputs: [ 'data' ],
	outputs: [ 'refresh' ]
})
export class GaugeComponent implements OnInit {
	data: IStorage;
	refresh = new EventEmitter();

	public canvasWidth = 300;
	public needleValue = 0;
	public centralLabel = '';
	public name = '';
	public bottomLabel = '';
	public options = {
		hasNeedle: true,
		needleColor: 'gray',
		needleUpdateSpeed: 1000,
		arcColors: [ 'rgb(55, 204, 104)', 'lightgray' ],
		arcDelimiters: [ 0 ],
		rangeLabel: [ '0', '0' ],
		needleStartValue: 0
	};
	constructor(private dialog: MatDialog) {}

	ngOnInit() {
		const isEmpty = this.data.product_amount == 0;
		const isFull = this.data.product_amount == this.data.max_capacity;
		let percentValue = 1;
		if (!isEmpty) percentValue = isFull ? 99 : this.data.product_amount * 100 / this.data.max_capacity;

		if (isFull) {
			this.options.arcColors = [ 'rgb(224, 39, 31)', 'rgb(224, 39, 31)' ];
		} else if (percentValue == 1) {
			this.options.arcColors = [ 'lightgray', 'lightgray' ];
		} else if (percentValue > 50) {
			this.options.arcColors = [ 'rgb(236, 228, 95)', 'lightgray' ];
		}

		this.name = this.data.storage + ' - ' + this.data.product;
		this.needleValue = isFull ? 100 : percentValue;
		this.bottomLabel = this.data.product_amount.toString();
		this.options.arcDelimiters = [ percentValue ];
		this.options.rangeLabel = [ '0', this.data.max_capacity.toString() ];
	}

	onRefreh() {
		this.refresh.emit();
	}

	openDialogEdit(): void {
		const dialogRef = this.dialog.open(EditStorageComponent, {
			width: '350px',
			data: this.data
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.refresh.emit();
		});
	}

	openDialogDelete(): void {
		const dialogRef = this.dialog.open(DeleteStorageComponent, {
			width: '350px',
			data: this.data
		});

		dialogRef.afterClosed().subscribe((result) => {
			this.refresh.emit();
		});
	}
}
