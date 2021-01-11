import { type } from "os";
import { formatePrice } from "./helpers";

type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function OrderSummary({ amount, totalPrice, onSubmit}: Props){
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{amount}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="amount-summary-total">
                        <strong className="amount-selected">{amount}</strong>
                        {formatePrice(totalPrice)}
                    </span>
                </div>
                <button onClick={onSubmit} className="order-summary-make-order">
                    FAZER PEDIDO
                </button>
            </div>

        </div>
    )
}

export default OrderSummary;