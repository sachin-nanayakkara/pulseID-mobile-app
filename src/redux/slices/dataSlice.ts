import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ImageItem = {
  id: number;
  name: string;
  images: string;
}

type ImagesState = {
  items: ImageItem[];
}

const initialState: ImagesState = {
  items: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<ImageItem[]>) {
      action.payload.forEach(({ id, name, images }) => {
        const existingItem = state.items.find(item => item.id === id);
        if (existingItem) {
          // If the id already exists, update its name and images
          existingItem.name = name;
          existingItem.images = images;
        } else {
          // If the id doesn't exist, add a new entry
          state.items.push({ id, name, images });
        }
      });
    },
    clearImagesById(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    clearAllImages(state) {
      state.items = [];
    },
  },
});

export const { setImages, clearImagesById, clearAllImages } = imagesSlice.actions;
export default imagesSlice.reducer;