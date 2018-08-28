import {createNavigationReducer,} from 'react-navigation-redux-helpers';
import routes from '../../routes';
const navReducer = createNavigationReducer(routes);
export default MyCombineReducers = {
    nav: navReducer,
};
 