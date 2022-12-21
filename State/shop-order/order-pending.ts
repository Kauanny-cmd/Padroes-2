import { OrderState } from './order-state'
import { Order } from "./order";
import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';

export class  OrderPending implements OrderState{
    private name = 'Pagamento pendente'

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }

    aprovado(): void{
        this.order.setState(new OrderApproved(this.order));
    }

    recusado(): void{
        this.order.setState(new OrderRejected(this.order))
    }

    aguardando(): void{
        console.log("O pagamento do pedido está pendente");
    }

}