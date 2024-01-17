// const questions = [
//     {
//         id: 1,
//         username: 'Harold',
//         dateCreated: '2024-01-17',
//         text: 'My computer won\'t turn on!?',
//         replies: [
//             {id: 1, username: 'bob', text: 'Have you tried plugging it in?'}
//         ]
//     }
// ];

const questions = [
    {
        id: 1,
        username: 'Harold',
        dateCreated: '2024-01-17',
        text: 'My computer won\'t turn on!?',
        replies: [
            { id: 1, username: 'bob', text: 'Have you tried plugging it in?' },
            { id: 2, username: 'alice', text: 'Check if there\'s a power outage in your area. Sometimes it\'s not the computer, but the power source.' }
        ]
    },
    {
        id: 2,
        username: 'Alice',
        dateCreated: '2024-01-18',
        text: 'What programming languages do you recommend for beginners?',
        replies: [
            { id: 3, username: 'eve', text: 'Python and JavaScript are excellent choices for beginners due to their readability and versatility.' },
            { id: 4, username: 'charlie', text: 'I also suggest starting with HTML and CSS for a solid foundation in web development.' }
        ]
    },
    {
        id: 3,
        username: 'Charlie',
        dateCreated: '2024-01-19',
        text: 'How do you approach time management in a fast-paced work environment?',
        replies: [
            { id: 5, username: 'dave', text: 'I prioritize tasks using the Eisenhower matrix, focusing on urgent and important activities first. This helps me stay organized and meet deadlines.' },
            { id: 6, username: 'eva', text: 'Time blocking is another effective technique. Allocate specific blocks of time to different tasks to maintain focus and productivity.' }
        ]
    },
    {
        id: 4,
        username: 'Eva',
        dateCreated: '2024-01-20',
        text: 'What strategies do you use for conflict resolution in a team?',
        replies: [
            { id: 7, username: 'frank', text: 'I encourage open communication, listen actively to all parties involved, and work collaboratively to find a resolution that benefits everyone.' },
            { id: 8, username: 'grace', text: 'Mediation can be helpful. I aim to understand all perspectives and guide the team towards a mutually beneficial solution.' }
        ]
    },
    {
        id: 5,
        username: 'Grace',
        dateCreated: '2024-01-21',
        text: 'How do you stay motivated during challenging projects?',
        replies: [
            { id: 9, username: 'hank', text: 'I break the project into smaller, manageable tasks and celebrate small victories along the way. This helps maintain motivation and momentum.' },
            { id: 10, username: 'ivy', text: 'Regularly revisiting the project\'s end goal and visualizing success keeps me motivated even during tough phases.' }
        ]
    }
];

for(const question of questions) {
    console.log(
        question.id,
        `By ${question.username}`,
        `on ${question.dateCreated}`,
        `Question: ${question.text}`,
        'List of replies:', question.replies
    );
}