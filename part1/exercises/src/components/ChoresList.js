import classes from './ChoresList.module.css'

export default function ChoresList () {
   const chores = ['Take a shower','Clean gardening tools','Finish landscaping']
   return (
      <div>
         <h3 className={classes.choresHeading}>Today's Chores</h3>
         <ul>
            {chores.map(idx => <li className={classes.choresText}>{idx}</li>)}
         </ul>
      </div>
   );
}