export interface OrderState {
    getName(): string;
    aprovado(): void;
    recusado(): void;
    aguardando(): void;
}