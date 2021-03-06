import { Show } from '../types/shows';

const formatShowData = (show: any): Show => ({
  id: show.id,
  name: show.name,
  year: show.premiered ? new Date(show.premiered).getFullYear().toString() : '',
  summary: show.summary,
  image: show?.image?.medium || show?.image?.original,
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
