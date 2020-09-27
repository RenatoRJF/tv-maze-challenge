import showsReducer from './shows/shows.reducer';
import showsState from './shows/shows.state';

const initialState = {
  shows: { ...showsState },
};

export default {
  initialState,
  reducer: (state: any, action: any) => ({
    shows: showsReducer(state.shows, action),
  }),
};
