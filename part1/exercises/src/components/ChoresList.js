import classes from './ChoresList.module.css'

export default function ChoresList () {
   const chores = ['Take a shower','Clean gardening tools','Finish landscaping']
   return (
      <div>
         <h3 className={classes.choresHeading}>Today's Chores</h3>
         <ul class={classes.removeListIndent}>
            {chores.map(idx => <li className={`${classes.choresText} ${classes.removeBullets}`}>{idx}</li>)}
         </ul>
      </div>
   );
}