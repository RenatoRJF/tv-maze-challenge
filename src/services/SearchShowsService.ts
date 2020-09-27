import api from './api';

class SearchShowsService {
  public async execute(value: string): Promise<{ data: any }> {
    return api.get(`search/shows?q=${value}`);
  }
}

export default SearchShowsService;
