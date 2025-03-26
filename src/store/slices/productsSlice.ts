import { apiService } from "@api/ApiService";
import { ProductResponse } from "@api/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: ProductResponse[];
  likedProducts: number[];
  showLikedOnly: boolean;
  selectedCategory: string;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  likedProducts: [],
  showLikedOnly: false,
  selectedCategory: '',
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<ProductResponse[], void>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await apiService.products.getProducts();
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
      return rejectWithValue("Ошибка при загрузке товаров");
    }
  }
);

export const fetchProductById = createAsyncThunk<ProductResponse, string | number>(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      return await apiService.products.getProduct(id.toString());
    } catch (error) {
      console.error("Ошибка при загрузке товаров:", error);
      return rejectWithValue("Ошибка при загрузке товаров");
    }
  }
);

export const deleteProductAsync = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await apiService.products.deleteProduct(id.toString());
      return id;
    } catch (error) {
      console.error("Ошибка при удалении товара:", error);
      return rejectWithValue("Ошибка при удалении товара");
    }
  }
);

export const addProductAsync = createAsyncThunk<
  ProductResponse,
  Omit<ProductResponse, "id" | "rating">,
  { rejectValue: string }
>(
  "products/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      return await apiService.products.addProduct(product);
    } catch (error) {
      console.error("Ошибка при добавлении товара:", error);
      return rejectWithValue("Ошибка при добавлении товара");
    }
  }
);

export const updateProductAsync = createAsyncThunk<
  ProductResponse,
  { id: string; product: Omit<ProductResponse, "id" | "rating"> },
  { rejectValue: string }
>(
  "products/updateProduct",
  async ({ id, product }, { rejectWithValue }) => {
    try {
      const response = await apiService.products.updateProduct(id, product);
      return response;
    } catch (error) {
      console.error("Ошибка при обновлении товара:", error);
      return rejectWithValue("Ошибка при обновлении товара");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setShowLikedOnly: (state, action: PayloadAction<boolean>) => {
      state.showLikedOnly = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductResponse>) => {
      state.products= [action.payload, ...state.products]
    },
    editProduct: (state, action: PayloadAction<ProductResponse>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state.products[index] = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.likedProducts.includes(id)) {
        state.likedProducts = state.likedProducts.filter(pid => pid !== id);
      } else {
        state.likedProducts.push(id);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      })
      .addCase(addProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [action.payload, ...state.products];
      })
      .addCase(addProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addProduct, editProduct, deleteProduct, toggleLike, setCategory, setShowLikedOnly } = productsSlice.actions;
export default productsSlice.reducer;
