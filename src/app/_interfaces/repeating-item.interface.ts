import { ItemInterface } from './item.interface';

export interface RepeatingItemInterface {
    Items: ItemInterface[];
    Period: string;
    TotalAmount: number;
    In_Out: boolean;
}
