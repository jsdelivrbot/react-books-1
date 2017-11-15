export function selectBook(book) {
    // selectBook is an action creator.  
    // it returns an action.  
    // actions are objects with a property named type
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}