import { CommonGetAxios, CommonPostAxios } from "../../util/HttpClient";

export default {
    GetDistanceData
}

async function GetDistanceData() {
    let response = await CommonGetAxios('/api/Distance/GetDistanceDetails', null);
    return response;
}