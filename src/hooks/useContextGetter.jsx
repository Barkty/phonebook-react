import { useContext } from 'react';
import AppContext  from 'store/appContext';

function useContextGetter() {
    return useContext(AppContext)
}

export default useContextGetter;