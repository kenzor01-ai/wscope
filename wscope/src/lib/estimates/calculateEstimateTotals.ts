type ItemWithProduct = {
  quantity: number;
  catalogProduct: {
    pricePerSf: number;
  };
};

export function calculateEstimateTotals(items: ItemWithProduct[]) {
  const totalSf = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = items.reduce(
    (sum, item) =>
      sum + item.quantity * item.catalogProduct.pricePerSf,
    0
  );

  return {
    totalSf,
    subtotal,
    total: subtotal,
  };
}

