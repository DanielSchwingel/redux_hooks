const INITIAL_DATA = {
   data: {
      name: 'Daniel Filipe Schwingel',
      email: 'danielfilipeschwingel@gmail.com',
   }  
}

export default function user(state = INITIAL_DATA, action) {
   switch (action.type) {
      case 'ALTER_USER':
         return { ...state, data: { name: action.name, email: action.email } } ;
      default:
         return state;
   }
}