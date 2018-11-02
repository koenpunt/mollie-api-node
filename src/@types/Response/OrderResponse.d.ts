declare namespace Mollie {
  interface OrderResponse {
    resource: string;
    id: string;
    profileId: string;
    method: string | null;
    mode: ApiMode;
    amount: Amount;
    amountCaptured: Amount | null;
    amountRefunded: Amount | null;
    status: OrderStatus;
    isCancelable: boolean;
    billingAddress: OrderAddress;
    consumerDateOfBirth?: string;
    orderNumber: string;
    shippingAddress: OrderAddress;
    locale: string;
    metadata: any;
    redirectUrl: string | null;
    lines: Array<OrderLineResponse>;
    webhookUrl?: string;
    createdAt: string;
    expiresAt?: string;
    expiredAt?: string;
    paidAt?: string;
    authorizedAt?: string;
    canceledAt?: string;
    completedAt?: string;
    _links: Links;
  }

  interface OrderLineResponse {
    resource: string;
    id: string;
    orderId: string;
    type: OrderLineType;
    name: string;
    status: OrderStatus;
    isCancelable: boolean;
    quantity: number;
    quantityShipped: number;
    amountShipped: number;
    quantityRefunded: number;
    amountRefunded: number;
    quantityCanceled: number;
    amountCanceled: number;
    shippableQuantity: number;
    refundableQuantity: number;
    unitPrice: Amount;
    discountAmount?: Amount;
    totalAmount: Amount;
    vatRate: string;
    vatAmount: Amount;
    sku?: string;
    createdAt: string;
    _links: Links;
  }
}
