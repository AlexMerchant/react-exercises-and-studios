import { useState } from 'react';

export default function BoardAssignment () {
   const board1 = {
      id: 1,
      label: 'Top Taco Recipes',
      value: 'Top Taco Recipe'
   }

   const board2 = {
      id: 2,
      label: 'Quick Taco Recipes',
      value: 'Quick Taco Recipe'
   }

   const board3 = {
      id: 3,
      label: 'Tex Tacos',
      value: 'Tex Taco'
   }

   const boards = [board1, board2, board3];

   const [boardName, setName] = useState('no boards yet!!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         { boards.map((idx) => (<option key={idx.id} value={idx.value}>{idx.label}</option>))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}