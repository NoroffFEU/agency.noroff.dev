import { displaySingleApplication } from '../../ui/application/singleApplication';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

export async function fetchSingleApplication(url, headers) {
  const data = await apiBaseFetch(url, headers);
  if (!data.ok) {
    displaySingleApplication(data);
  } else {
    console.log('Error');
  }
}
