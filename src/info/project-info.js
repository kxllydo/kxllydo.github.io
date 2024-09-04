export const projectNames = ['Best Professor', 'Budget Buddy', 'SpotiU']
export const skills = {
    'Budget Buddy' : ['SQL', 'Python', 'Flask', 'Chart.py', 'React'],
    'Best Professor' : ['GraphQL', 'JavaScript', 'Selenium', 'Spring-boot', 'Java'],
    'SpotiU' : ['Python', 'JavaScript', 'Spotipy']
};

export const bulletPoints = {
    'Budget Buddy' : [
        'Constructed a Flask API with MySQL integration that handled user authentication, session handling, and CRUD operations such as expense tracking, category creation, and spending limitations', 
        'Leveraged React hooks and state management to create dynamic and interactive components, enhancing user experience while navigating through expense summaries, spending categories, and budgets',
        'Applied agile principles and scrum methodologies on a team to effectively outline and collaborate on user-orientated features'
    ],
    'Best Professor' : [
        'Allowed users to input their school and courses and generated the top 5 professors instructing each course',
        "Reverse-engineered ratemyprofessor.com’s GraphQL queries to gather and refine data about professors, schools, and courses, improving the accuracy and relevance of the displayed information",
        "Created JavaScript functions that filtered through 1-100 professors’ ratings to proficiently output the best professors per course within seconds, ensuring that the user has a quick and informational result",
    ],
    'SpotiU' : [
        'Develop Python scripts using Spotify’s Web API to optimize Spotify’s song  recommendations for the user',
        'Utilize Spotipy lib to process JSON data (artists, tracks, and playlists) to create filters for Spotify-generated playlists',
        'Implement user authorization with Oauth 2.0 framework for secure access about listening history and preferences'
    ]
}
