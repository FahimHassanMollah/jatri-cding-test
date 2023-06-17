import { useToast } from "vue-toast-notification";
const $toast = useToast();


export function useToastMessage() {
    function showToastMessage( type, message ) {
        $toast.open({
            message: `${message}`,
            type: `${type}`,
        });
    }
    return { showToastMessage }
}
