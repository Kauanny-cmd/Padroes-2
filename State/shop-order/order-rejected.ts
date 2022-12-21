import { OrderState } from './order-state'
import { Order } from "./order";

export class  OrderRejected implements OrderState{
    private name = 'Pagamento recusado'

    constructor(private order: Order){}

    getName(): string{
        return this.name;
    }

    aprovado(): void{
        console.log("O pagamento foi recusado, operação indisponível");
    }

    recusado(): void{
        console.log("O pagamento foi recusado, operação indisponível");
    }

    aguardando(): void{
        console.log("O pagamento foi recusado, operação indisponível");
    }

}