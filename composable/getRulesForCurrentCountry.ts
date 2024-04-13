
import axios from "axios";

export async  function getRulesForCurrentCountry (countryCode: string)  {    
    try {
        const response = await axios.get(
            `http://13.231.117.234/api/import?code=${countryCode}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data
    } catch (error) {
        console.error((error as Error).message);
        return 'error'
    }
}