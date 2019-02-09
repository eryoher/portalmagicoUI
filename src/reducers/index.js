import { combineReducers } from 'redux';
import carouselReducer from './carousel';
import productsReducer from './products';
import campaignReducer from './campaigns'

const rootReducer = combineReducers({
    carousel: carouselReducer,
    products: productsReducer,
    campaigns: campaignReducer
});

export default rootReducer;
