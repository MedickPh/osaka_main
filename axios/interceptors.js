import axios from "axios";



axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        let errorMessage = {
        response: error,
        code: error.response ? error.response.status : 'Network Error',
        message: null,
        };
        if (error.response) {
        switch (error.response.status) {
            case 400:
            errorMessage.message =
                "The problem is in the syntax of the sent data, try again with other data.";
            break;

            case 401:
            errorMessage.message = error.response.data.message
            break;

            case 403:
            errorMessage.message =
                "Access denied, you do not have permission to perform this action";
            break;

            case 404:
            errorMessage.message = "Resource not found, try again with other data";
            break;

            case 405:
            errorMessage.message = "Method not allowed, check server settings";
            break;

            case 409:
            errorMessage.message =
                "Conflict, such a resource already exists. Reload the page";
            break;

            case 422:
            errorMessage.message = "Problem in the sent data, try again with other data";
            break;

            case 500:
            errorMessage.message = "Server error, please check if it's working";
            break;

            case "ERR_BAD_RESPONSE":
                errorMessage.message = "Server error, please check if it's working";
            break;
            default:
            errorMessage.message = `Unhandled error, check console`;
        }
        }else if (error.request) {
            errorMessage.message = "Network error, please check your internet connection";
        } else {
            errorMessage.message = "Unprocessed error, details in console";
        }
        throw errorMessage;
    }
);

export default axios;
