import { create } from "zustand";

const useCartShopping = create((set) => ({
  products: [],

  // Agregar producto
  addProduct: (product) =>
    set((state) => {
      // Buscar si ya existe la misma pizza + mismo tamaño
      const existing = state.products.find(
        (p) => p.id === product.id && p.tamaño === product.tamaño
      );

      // Si ya existe → aumentar cantidad
      if (existing) {
        return {
          products: state.products.map((p) =>
            p.id === product.id && p.tamaño === product.tamaño
              ? { ...p, cantidad: p.cantidad + 1 }
              : p
          ),
        };
      }

      // Si no existe → agregar con cantidad inicial 1
      return {
        products: [...state.products, { ...product, cantidad: 1 }],
      };
    }),

  // 🔼 Aumentar cantidad
  increaseCantidad: (id, tamaño) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id && p.tamaño === tamaño ? { ...p, cantidad: p.cantidad + 1 } : p
      ),
    })),

  // 🔽 Disminuir cantidad
  decreaseCantidad: (id, tamaño) =>
    set((state) => ({
      products: state.products
        .map((p) =>
          p.id === id && p.tamaño === tamaño ? { ...p, cantidad: p.cantidad - 1 } : p
        )
        .filter((p) => p.cantidad > 0), // opcional: eliminar si cantidad llega a 0
    })),
}));

export default useCartShopping;
