import {useQuery} from "react-query";
import getData from "../api/getData.ts";

const useData = () => {
    return useQuery({
        refetchOnWindowFocus: false,
        queryKey: ['api'],
        queryFn: () => getData(),
    })
}

export default useData;