import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import coursesReducer from '../Course/CoursesReducer';
import selectedCourseReducer from '../Course/SelectedCourseReducer';
import authorReducer from '../Auther/AuthorReducer';
import apiReducer from '../Shared/Api/apiReducer';

export default combineReducers({
    coursesReducer,
    selectedCourseReducer,
    authorReducer,
    apiReducer,
    form: formReducer    
});


