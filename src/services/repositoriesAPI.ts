import {
  BASE_API_URL,
  URL_PARAMS,
  URL_SORTING_ORDER,
} from "../constants/AppConstants";
import { getWeeklyDates } from "../util/util";

export const getRepositories = async () => {
  const { todaysDate, formattedLastWeekDate } = getWeeklyDates();
  try {
    const response = await fetch(
      `${BASE_API_URL}/${URL_PARAMS}:${formattedLastWeekDate}..${todaysDate}&${URL_SORTING_ORDER}`
    );
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error("Error while fetching repositories...");
  }
};
