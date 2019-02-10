import { combineReducers } from 'redux';
import carouselReducer from './carousel';
import productsReducer from './products';
import campaignReducer from './campaigns'
import projectsReducer from './projects';

const rootReducer = combineReducers({
    carousel: carouselReducer,
    products: productsReducer,
    campaigns: campaignReducer,
    projects: projectsReducer
});

export default rootReducer;
