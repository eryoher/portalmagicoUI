import { combineReducers } from 'redux';
import carouselReducer from './carousel';
import productsReducer from './products';

const rootReducer = combineReducers({
    carousel: carouselReducer,
    products: productsReducer
});

export default rootReducer;
