import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/*
class BookList extends Component {
    
    // First method to consume the provider
    static contextType = ThemeContext;
    
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div className="book-list" style={{ color:theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}> the way of kings</li>
                    <li style={{ background: theme.ui }}> the way of wind</li>
                    <li style={{ background: theme.ui }}> the way of das</li>
                </ul>
            </div>
         );
    }
}
*/

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list" style={{ color:theme.syntax, background: theme.bg }}>
            <ul>
                <li style={{ background: theme.ui }}> the way of kings</li>
                <li style={{ background: theme.ui }}> the way of wind</li>
                <li style={{ background: theme.ui }}> the way of das</li>
            </ul>
        </div>
    );
}
 
export default BookList;
 
