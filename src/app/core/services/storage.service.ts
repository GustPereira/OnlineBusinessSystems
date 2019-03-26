import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { IStorages } from 'src/app/core/models/storage';
import { Product } from '../models/product.enum';

@Injectable({
	providedIn: 'root'
})
export class StorageService {
	webApiUrl = environment.webApiUrl + 'storage';

	constructor(private http: HttpClient) {}

	public list() {
		return this.mock();
		// return this.http.get(this.webApiUrl);
	}

	public post(data) {
		return this.mock();
		// return this.http.post(this.webApiUrl, data);
	}

	public put(data) {
		return this.mock();
		// return this.http.put(this.webApiUrl + '/' + data.storage_key, data);
	}

	public delete(storage_key) {
		return this.mock();
		// return this.http.delete(this.webApiUrl + '/' + storage_key);
	}

	private mock(): Observable<IStorages> {
		let mockData: IStorages = {
			success: true,
			message: '',
			data: [
				{
					storage_key: 1,
					storage: 'Storage 1',
					max_capacity: 8000,
					product: Product.Corn,
					product_amount: 3000
				},
				{
					storage_key: 2,
					storage: 'Storage 2',
					max_capacity: 4000,
					product: Product.Bean,
					product_amount: 3000
				},
				{
					storage_key: 3,
					storage: 'Storage 3',
					max_capacity: 5000,
					product: Product.Wheat,
					product_amount: 5000
				},
				{
					storage_key: 4,
					storage: 'Storage 4',
					max_capacity: 10000,
					product: Product.Oats,
					product_amount: 1000
				},
				{
					storage_key: 5,
					storage: 'Storage 5',
					max_capacity: 8000,
					product: Product.Corn,
					product_amount: 4000
				},
				{
					storage_key: 6,
					storage: 'Storage 6',
					max_capacity: 4000,
					product: Product.Bean,
					product_amount: 3500
				},
				{
					storage_key: 7,
					storage: 'Storage 7',
					max_capacity: 5000,
					product: Product.Wheat,
					product_amount: 100
				},
				{
					storage_key: 8,
					storage: 'Storage 8',
					max_capacity: 10000,
					product: Product.Oats,
					product_amount: 10000
				}
			]
		};
		return of(mockData);
	}
}
