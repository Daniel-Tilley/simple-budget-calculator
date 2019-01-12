import { RepeatingItemInterface } from '../_interfaces/repeating-item.interface';
import { ItemInterface } from '../_interfaces/item.interface';

export class RepeatingItem implements RepeatingItemInterface {
    Items: ItemInterface[];
    Period: string;
    TotalAmount: number;
    In_Out: boolean;
}
