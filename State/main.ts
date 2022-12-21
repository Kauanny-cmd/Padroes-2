import { Order } from "./shop-order/order"

const order = new Order
order.aguardando() //Aguardando pagamento do pedido
order.aprovado() //Pedido aprovado


//A partir de agora, o pedido não muda de estado, porque já foi enviado
order.recusado()
order.aprovado()
order.aguardando()