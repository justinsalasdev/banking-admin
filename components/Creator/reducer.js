export default function reducer(state, action) {
  switch (action.type) {
    case "start": {
      return { ...state, isLoading: true, error: null };
    }

    case "error": {
      return { ...state, error: action.payload, isLoading: false };
    }

    case "done": {
      return { ...state, isLoading: false };
    }
  }
}
