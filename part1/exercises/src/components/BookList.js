import classes from "./BookList.module.css";

export default function BookList() {
   let pageTitle = "Books Recently Read";
   let book1 = "https://m.media-amazon.com/images/I/51iSIrx95WL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51ida7uyGdL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51sFLS8vl9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div className={classes.borderWrap}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Iron Empires - Robber Barons, Railroads, and the Making of Modern America" />
         <img src={book2} alt="The Last Honest Man - The CIA, the FBI, the Mafia, and the Kennedys―and One Senator's Fight to Save Democracy" />
         <img src={book3} alt="Powers and Thrones: A New History of the Middle Ages" />
      </div>      
   );
}