import React from 'react';

// Displays an individual post
function Post({ title, message, author }) {
    return (
        <div className='post'>
            <h3 className='posttitle'>{title}</h3>
            <br />
            <p className='postmessage'>{message}</p>
            <br />
            <p className='postauthor'>Made By: {author}</p>
        </div>
    );
}

export default Post;