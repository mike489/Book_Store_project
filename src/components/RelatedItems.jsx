import SingleBook from './SingleBook';


export default function RelatedItems() {
    const bookArray = [
        {
            id: 1,
            image: "https://th.bing.com/th/id/R.7c9c6d06c7f853a86e239651b5aaa6ce?rik=EVs3k1SZl6%2fkJg&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-10.jpg&ehk=iao%2fDCEv0L%2fUICQ0Oq5D2M1%2f0NLbgYS%2f8oU5O7f7A90%3d&risl=&pid=ImgRaw&r=0",
            price: "300 birr",
            title: "ATOMIC HABIT",
        },
       
        {
            id: 2,
            image: "https://th.bing.com/th/id/R.7c9c6d06c7f853a86e239651b5aaa6ce?rik=EVs3k1SZl6%2fkJg&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-10.jpg&ehk=iao%2fDCEv0L%2fUICQ0Oq5D2M1%2f0NLbgYS%2f8oU5O7f7A90%3d&risl=&pid=ImgRaw&r=0",
            price: "600 birr",
            title: "WHO WAS THAT MAN",
        },
        {
            id: 3,
            image: "https://th.bing.com/th/id/R.7c9c6d06c7f853a86e239651b5aaa6ce?rik=EVs3k1SZl6%2fkJg&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-10.jpg&ehk=iao%2fDCEv0L%2fUICQ0Oq5D2M1%2f0NLbgYS%2f8oU5O7f7A90%3d&risl=&pid=ImgRaw&r=0",
            price: "500 birr",
            title: "SEE YOU",
        },
        {
            id: 4,
            image: "https://th.bing.com/th/id/R.7c9c6d06c7f853a86e239651b5aaa6ce?rik=EVs3k1SZl6%2fkJg&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-10.jpg&ehk=iao%2fDCEv0L%2fUICQ0Oq5D2M1%2f0NLbgYS%2f8oU5O7f7A90%3d&risl=&pid=ImgRaw&r=0",
            price: "300 birr",
            title: "Passion",
        },
        {
            id: 5,
            image: "https://th.bing.com/th/id/R.7c9c6d06c7f853a86e239651b5aaa6ce?rik=EVs3k1SZl6%2fkJg&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-10.jpg&ehk=iao%2fDCEv0L%2fUICQ0Oq5D2M1%2f0NLbgYS%2f8oU5O7f7A90%3d&risl=&pid=ImgRaw&r=0",
            price: "450 birr",
            title: "I AM DEAD",
        },
        {
            id: 6,
            image: "https://th.bing.com/th/id/R.7c9c6d06c7f853a86e239651b5aaa6ce?rik=EVs3k1SZl6%2fkJg&riu=http%3a%2f%2fwww.dumpaday.com%2fwp-content%2fuploads%2f2015%2f10%2fbook-titles-10.jpg&ehk=iao%2fDCEv0L%2fUICQ0Oq5D2M1%2f0NLbgYS%2f8oU5O7f7A90%3d&risl=&pid=ImgRaw&r=0",
            price: "900 birr",
            title: "NO ONE EVER",
        },
     
    ];

    return (
        <div className="related-item-container">
            <h2 className="text-xl font-semibold">Related Items</h2>
            <div className="related-item-books flex flex-row gap-8 items-center overflow-x-auto w-full p-4">
                {bookArray && bookArray.map(data => (
                    <SingleBook data={data} key={data.id} />
                ))}
            </div>
        </div>
    );
}
