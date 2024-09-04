import React, { useState } from 'react';

function BookList({ books, deleteBook, updateBook }) {
  const [editingBookId, setEditingBookId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingAuthor, setEditingAuthor] = useState('');

  const handleEditClick = (book) => {
    setEditingBookId(book.id);
    setEditingTitle(book.title);
    setEditingAuthor(book.author);
  };

  const handleUpdate = () => {
    updateBook(editingBookId, { title: editingTitle, author: editingAuthor });
    setEditingBookId(null);
  };

  const lista = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '20px',
  };

  const buttonStyle = {
    marginTop: '10px',
    backgroundColor: '#da3917',
    color: 'white',
    cursor: 'pointer',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
  };

  const buttonStyle2 = {
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '4px',
  };

  const bookContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <ul style={lista}>
      {books.map((book) => (
        <li key={book.id} style={itemStyle}>
          {editingBookId === book.id ? (
            <div style={bookContainer}>
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              <input
                type="text"
                value={editingAuthor}
                onChange={(e) => setEditingAuthor(e.target.value)}
              />
              <button style={buttonStyle2} onClick={handleUpdate}>
                Save
              </button>
              <button
                style={buttonStyle}
                onClick={() => setEditingBookId(null)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div style={bookContainer}>
              <div>
                {book.title} by {book.author}
              </div>
              <button style={buttonStyle} onClick={() => deleteBook(book.id)}>
                Delete
              </button>
              <button
                style={buttonStyle2}
                onClick={() => handleEditClick(book)}
              >
                Update
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BookList;
