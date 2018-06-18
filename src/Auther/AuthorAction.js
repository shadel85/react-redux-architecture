import * as ActionType from '../Constants/ActionType';
import AuthorApi from './AuthorApi';
import { ApiCallBeginAction } from '../Shared/Api/ApiAction';


export const getAuthorsResponse = authors => ({
    type: ActionType.GET_AUTHORS_RESPONSE,
    authors
});



export function getAuthorsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(getAuthorsResponse(authors));
            }).catch(error => {
                throw error;
            });
    };
}
