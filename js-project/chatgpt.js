const questions = [
    {
        id: 1,
        username: 'user123',
        datePosted: '2024-03-05',
        text: 'How do I update my software?',
        replies: [
            { id: 1, username: 'helper1', text: 'You can update your software by going to the settings menu and selecting the software update option.' },
            { id: 2, username: 'helper2', text: 'Make sure to connect to a stable internet connection before updating your software.' }
        ]
    },
    {
        id: 2,
        username: 'user456',
        datePosted: '2024-03-06',
        text: 'What is the best antivirus software?',
        replies: [
            { id: 1, username: 'helper3', text: 'The best antivirus software often depends on your specific needs and the devices you use.' },
            { id: 2, username: 'helper4', text: 'Some popular antivirus software options include Norton, McAfee, and Bitdefender.' },
            { id: 3, username: 'helper5', text: 'It\'s recommended to choose an antivirus software that provides real-time protection and regular updates.' }
        ]
    },
    {
        id: 3,
        username: 'user789',
        datePosted: '2024-03-07',
        text: 'How can I improve my computer\'s performance?',
        replies: [
            { id: 1, username: 'helper6', text: 'You can improve your computer\'s performance by removing unnecessary programs and files.' },
            { id: 2, username: 'helper7', text: 'Try upgrading your RAM or using a solid-state drive (SSD) for faster performance.' }
        ]
    },
    {
        id: 4,
        username: 'user101112',
        datePosted: '2024-03-08',
        text: 'What are some tips for staying safe online?',
        replies: [
            { id: 1, username: 'helper8', text: 'Use strong, unique passwords for your online accounts and enable two-factor authentication when available.' },
            { id: 2, username: 'helper9', text: 'Be cautious of phishing emails and websites, and only download files from trusted sources.' },
            { id: 3, username: 'helper10', text: 'Keep your software and operating system up to date to protect against security vulnerabilities.' }
        ]
    },
    {
        id: 5,
        username: 'user131415',
        datePosted: '2024-03-09',
        text: 'How do I recover deleted files?',
        replies: [
            { id: 1, username: 'helper11', text: 'You can try using file recovery software to recover deleted files from your computer.' },
            { id: 2, username: 'helper12', text: 'Stop using the device immediately to prevent overwriting the deleted files, which can make them unrecoverable.' }
        ]
    },
    {
        id: 6,
        username: 'user161718',
        datePosted: '2024-03-10',
        text: 'What is the best way to back up my data?',
        replies: [
            { id: 1, username: 'helper13', text: 'The best way to back up your data is to use a combination of external hard drives, cloud storage, and regular backups.' },
            { id: 2, username: 'helper14', text: 'Make sure to back up your data regularly to protect against data loss due to hardware failure or other issues.' },
            { id: 3, username: 'helper15', text: 'Consider using automated backup software to make the process easier and more reliable.' }
        ]
    },
    {
        id: 7,
        username: 'user192021',
        datePosted: '2024-03-11',
        text: 'How can I protect my privacy online?',
        replies: [
            { id: 1, username: 'helper16', text: 'Use a virtual private network (VPN) to encrypt your internet connection and protect your online privacy.' },
            { id: 2, username: 'helper17', text: 'Be cautious of sharing personal information online and adjust your privacy settings on social media platforms.' }
        ]
    },
    {
        id: 8,
        username: 'user222324',
        datePosted: '2024-03-12',
        text: 'How do I prevent malware infections?',
        replies: [
            { id: 1, username: 'helper18', text: 'Install antivirus software and keep it up to date to protect against malware infections.' },
            { id: 2, username: 'helper19', text: 'Be cautious of downloading files or clicking on links from unknown or untrusted sources.' },
            { id: 3, username: 'helper20', text: 'Regularly scan your computer for malware and remove any threats detected.' }
        ]
    },
    {
        id: 9,
        username: 'user252627',
        datePosted: '2024-03-13',
        text: 'What are some common computer problems and how can I fix them?',
        replies: [
            { id: 1, username: 'helper21', text: 'Common computer problems include slow performance, freezing, and software crashes.' },
            { id: 2, username: 'helper22', text: 'You can fix these issues by updating your software, freeing up disk space, and checking for hardware problems.' }
        ]
    },
    {
        id: 10,
        username: 'user282930',
        datePosted: '2024-03-14',
        text: 'How do I improve my Wi-Fi signal?',
        replies: [
            { id: 1, username: 'helper23', text: 'You can improve your Wi-Fi signal by moving your router to a central location and away from obstructions.' },
            { id: 2, username: 'helper24', text: 'Upgrade your router to a newer model that supports the latest Wi-Fi standards for better performance.' }
        ]
    },
    {
        id: 11,
        username: 'user313233',
        datePosted: '2024-03-15',
        text: 'What are the best software tools for productivity?',
        replies: [
            { id: 1, username: 'helper25', text: 'Some popular productivity software tools include Microsoft Office, Google Workspace, and Trello.' },
            { id: 2, username: 'helper26', text: 'Choose software tools that align with your specific needs and workflow to maximize productivity.' }
        ]
    }
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

