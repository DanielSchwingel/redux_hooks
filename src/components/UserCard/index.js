import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UserCard = ()=> {
   const user = useSelector( state => state.user.data );
   const dispatch = useDispatch();

   function alterUser(){
      dispatch({
         type: 'ALTER_USER',
         name: 'João das Canhas',
         email: 'joaocachaceiro@gmail.com'
      })
   }


   return (
      <div id='component-usercard'>
         <p>{user.name}</p>
         <p>{user.email}</p>

         <button type='button' onClick={alterUser}>
            Alterar Usuário
         </button>
      </div>
   )
};

export default UserCard;