import { CheckInData } from './check-in-data';
import { isDate } from 'util';


export class Flight {
    public checkin_done = false
    public data: CheckInData = null
    public key: string;

    constructor(
        public from: string,
        public to: string,
        public date: Date|String,
        public time: string = "",
        public price: number = -1
    ){
        if(typeof this.date !== 'string' && isDate(this.date)){
            const date_options = {year: 'numeric', month: 'numeric', day: 'numeric' };
            this.date = this.date.toLocaleDateString('en-GB', date_options)
        }
    }
}
