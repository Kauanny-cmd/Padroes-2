import { OrderState } from './order-state'
import { Order } from "./order";
import { OrderPending } from './order-pending';
import { OrderRejected } from './order-rejected';

export class  OrderApproved implements OrderState{
    private name = 'Pagamento aprovado'

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }

    aprovado(): void{
        console.log("O pedido foi aprovado");
    }

    recusado(): void{
        this.order.setState(new OrderRejected(this.order));
    }

    aguardando(): void{
        this.order.setState(new OrderPending(this.order));
    }

}