import { productReducer } from "./Products/product.reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: productReducer,
  })

export {store}