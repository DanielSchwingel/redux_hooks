const INITIAL_DATA = {
   data: [
      'ReactJS',
      'ReactNative',
      'NodeJS'
   ]
}

export default function courses(state = INITIAL_DATA, action) {
   switch (action.type) {
      case 'ADD_COURSE':
         return { ...state, data: [...state.data, action.title] } ;
      default:
         return state;
   }
}