import { OrderState } from "./order-state";
import { OrderPending } from "./order-pending";

export class Order{
    private state: OrderState = new OrderPending(this);

    getState(): OrderState{
        return this.state;
    }

    setState(state: OrderState): void{
        this.state = state;
        console.log(`O estado do pedido é: ${this.getStateName()}`);
        
    }

    getStateName(): string{
        return this.state.getName();
    }

    aprovado(): void{
        this.state.aprovado();
    }

    recusado(): void{
        this.state.recusado();
    }

    aguardando(): void{
        this.state.aguardando();
    }

}