"use client";

import { useState } from "react";

interface ProductLine {
  id: number;
  name: string;
  sqft: number;
  pricePerSqft: number;
  waste: number;
  lineTotal: number;
}

export default function NewEstimatePage() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [products, setProducts] = useState<ProductLine[]>([]);
  const [nextId, setNextId] = useState(1);

  const addProduct = () => {
    setProducts([
      ...products,
      { id: nextId, name: "", sqft: 0, pricePerSqft: 0, waste: 0, lineTotal: 0 },
    ]);
    setNextId(nextId + 1);
  };

  const updateProduct = (
    id: number,
    field: keyof ProductLine,
    value: number | string
  ) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) {
          const updated = { ...p, [field]: value };
          updated.lineTotal =
            Math.round(
              updated.sqft *
                updated.pricePerSqft *
                (1 + updated.waste / 100) *
                100
            ) / 100;
          return updated;
        }
        return p;
      })
    );
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const subtotal = products.reduce((acc, p) => acc + p.lineTotal, 0);
  const taxRate = 0.0825;
  const tax = Math.round(subtotal * taxRate * 100) / 100;
  const total = Math.round((subtotal + tax) * 100) / 100;

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      {/* Header / Client Info */}
      <div className="sticky top-0 bg-white p-4 border-b z-10">
        <h1 className="text-3xl font-bold mb-4">New Estimate</h1>
        <div className="grid grid-cols-2 gap-4 max-w-md">
          <input
            type="text"
            placeholder="Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Client Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Products</h2>

        <table className="w-full border rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Sqft</th>
              <th className="p-2 border">Price / Sqft</th>
              <th className="p-2 border">Waste %</th>
              <th className="p-2 border">Line Total</th>
              <th className="p-2 border"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="p-2 border">
                  <input
                    className="border p-1 w-full"
                    value={p.name}
                    onChange={(e) =>
                      updateProduct(p.id, "name", e.target.value)
                    }
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    className="border p-1 w-full"
                    value={p.sqft}
                    onChange={(e) =>
                      updateProduct(p.id, "sqft", Number(e.target.value))
                    }
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    className="border p-1 w-full"
                    value={p.pricePerSqft}
                    onChange={(e) =>
                      updateProduct(
                        p.id,
                        "pricePerSqft",
                        Number(e.target.value)
                      )
                    }
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    className="border p-1 w-full"
                    value={p.waste}
                    onChange={(e) =>
                      updateProduct(p.id, "waste", Number(e.target.value))
                    }
                  />
                </td>
                <td className="p-2 border text-right font-semibold">
                  ${p.lineTotal.toFixed(2)}
                </td>
                <td className="p-2 border text-center">
                  <button
                    onClick={() => removeProduct(p.id)}
                    className="text-red-600"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addProduct}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Product
        </button>
      </div>

      {/* Summary */}
      <div className="max-w-md border-t pt-4">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (8.25%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="mt-4 w-full bg-green-600 text-white py-3 rounded font-semibold">
          Save Estimate
        </button>
      </div>
    </div>
  );
}

