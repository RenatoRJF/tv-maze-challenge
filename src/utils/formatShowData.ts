import { Show } from '../types/shows';

const formatShowData = (show: any): Show => ({
  id: show.id,
  name: show.name,
  year: show.premiered,
  summary: show.summary,
  image: show?.image?.original || show?.image?.medium,
  type: show.type,
  genres: show.genres,
  language: show.language,
  runtime: show.runtime,
  officialSite: show.officialSite,
  rating: show.rating,
  network: show.network,
  schedule: show.schedule,
  status: show.status,
});

export default formatShowData;
