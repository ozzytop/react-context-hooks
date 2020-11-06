import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the wind', i:1},
        {title: 'the way of kings', i:2},
        {title: 'the final empire', i:3},
        {title: 'the hero of ages', i:4},
    ]);
    return (
       <BookContext.Provider value={{books}}>
            {props.children}
       </BookContext.Provider> 
    );
}

export default BookContextProvider;