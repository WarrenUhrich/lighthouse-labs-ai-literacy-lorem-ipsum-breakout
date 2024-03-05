const question = {
    id:         1,
    username:   'quinn123',
    datePosted: '2024-03-05',
    text:       'My computer won\'t turn on?',
    replies:    [
        { id: 1, username: 'bob89789', text: 'Have you tried turning off and back on again?' },
        { id: 2, username: 'lorem8485348054', text: 'Lorem ipsum delor...' }
    ]
};

const questions = [
    question,
    /* ... */
];

for(const q of questions) {
    console.log(
        q.id,
        `By ${q.username}`,
        `on ${q.datePosted}`,
        `Question: ${q.text}`,
        `List of replies:`, q.replies
    );
}
