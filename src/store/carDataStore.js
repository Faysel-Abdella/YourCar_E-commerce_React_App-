import { createSlice, configureStore } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cart",
  initialState: {
    totalOrderedQuantity: localStorage.getItem("total_quantity")
      ? JSON.parse(localStorage.getItem("total_quantity"))
      : 0,
    orderedCars: localStorage.getItem("ordered_cars")
      ? JSON.parse(localStorage.getItem("ordered_cars"))
      : [],
  },
  reducers: {
    addCarToCart(state, action) {
      state.totalOrderedQuantity += 1;
      const newCar = action.payload;
      const newCarExist = state.orderedCars.find((car) => car.id === newCar.id);
      // The find() method returns the value of the first element that passes a test. In this case if the new added car is exist it returns this car object and we assign this car obj to newCarExist constant

      if (!newCarExist) {
        state.orderedCars.push({
          id: newCar.id,
          name: newCar.name,
          class: newCar.class,
          image: newCar.image,
          orderedQuantity: 1, // For the first time its ordered quantity is 1
        });
      } else {
        newCarExist.orderedQuantity += 1;
      }
    },

    removeCarFromCart(state, action) {
      const removedCarId = action.payload.id;
      state.totalOrderedQuantity -= 1;

      const removedCar = state.orderedCars.find(
        (car) => car.id === removedCarId
      );

      if (removedCar.orderedQuantity === 1) {
        // Remove the item totally from the array if the quantity was one and the user wants to delete if not just decrease the quantity
        state.orderedCars = state.orderedCars.filter(
          (car) => car.id !== removedCarId
        );
      } else if (removedCar.orderedQuantity > 1) {
        removedCar.orderedQuantity -= 1;
      } else {
        return;
      }
    },

    deleteCarFromCart(state, action) {
      const deletedCarId = action.payload.id;
      const deletedCar = state.orderedCars.find(
        (car) => car.id === deletedCarId
      );
      state.totalOrderedQuantity -= deletedCar.orderedQuantity;

      state.orderedCars = state.orderedCars.filter(
        (car) => car.id !== deletedCarId
      );

      deletedCar.orderedQuantity = 0;
    },

    deleteAllCarFromCart(state) {
      state.orderedCars.length = 0;
      state.totalOrderedQuantity = 0;
    },
  },
});

const store = configureStore({
  reducer: carSlice.reducer,
});
// configureStore created store and as createStore it needs to know the reducer which will be responsible for changing it, so we pass this reducer with a special property of reducer

export const carActions = carSlice.actions;
// carAction conatins all reducers that are in carSlice slice

export default store;
