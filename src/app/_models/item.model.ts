import { ItemInterface } from '../_interfaces/item.interface';

export class Item implements ItemInterface {
    Id: number;
    Name: string;
    Amount: number;
    Date: string;
    In_Out: boolean;
    Repeating: boolean;
}
