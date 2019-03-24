export interface IStorages {
  success: boolean;
  message: string;
  data: IStorage[];
}

export interface IStorage {
  storage_key: number;
  storage: string;
  max_capacity: number;
  product: string;
  product_amount: number;
}
