document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const booksDiv = document.getElementById('books');

    // Fetch books on page load
    fetchBooks();

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const year = document.getElementById('year').value.trim();

        if (title && author && year) {
            try {
                const response = await fetch('http://localhost:2500/book', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, author, year }),
                });

                if (response.ok) {
                    fetchBooks(); // Refresh book list
                    form.reset(); // Clear form fields
                } else {
                    console.error('Failed to add book');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.warn('All fields are required');
        }
    });

    // Function to fetch and display books
    async function fetchBooks() {
        try {
            const response = await fetch('http://localhost:2500/book');
            const data = await response.json();
            booksDiv.innerHTML = ''; // Clear existing content

            data.forEach((book) => {
                const bookElement = document.createElement('div');
                bookElement.classList.add('book');
                bookElement.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Year: ${book.year}</p>
                `;
                booksDiv.appendChild(bookElement);
            });
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }
});