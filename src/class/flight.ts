import { CheckInData } from './check-in-data';
import { isDate } from 'util';


export class Flight {
    public checkin_done = false
    public data: CheckInData = null
    public key: string;

    constructor(
        public from: string,
        public to: string,
        public date: Date,
        public time: string = "",
        public price: number = -1
    ){
    }
}
