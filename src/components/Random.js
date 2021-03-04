import React from 'react';

const DUMMY_DATA = [
    {
        title: 'Article #1',
        content: 'Lorem Ipsum'
    },
    {
        title: 'Article #2',
        content: 'Lorem Ipsum'
    },
    {
        title: 'Article #3',
        content: 'Lorem Ipsum'
    },
]

export default function Random () {
    const [articles, setArticles] = React.useState(null);

    React.useEffect(() => {
        setArticles(DUMMY_DATA);
    }, []);

    const handleLiClick = (aTitle) => {
        const updatedArticles = articles.filter(a => a.title !== aTitle);

        setArticles(updatedArticles);
    };
    
    return (
        <div>
            <h1>
                List of Random Links
            </h1>
            <ul>
                {articles && articles.map((article, index) => {
                    return (
                        <li key={index} onClick={() => handleLiClick(article.title)}>{article.title} - {article.content}</li>
                    )
                })}
            </ul>
        </div>
    )
};