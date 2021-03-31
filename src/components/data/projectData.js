import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'

const dataProjects = [
    {
        name: 'COVID 19 tracker',
        image: COVID,
        deployed_url: '',
        github_url: '',
        category: ['react.js']
    },

    {
        name: 'Dev Talks',
        image: Dev_talks,
        deployed_url: '',
        github_url: '',
        category: ['node.js', 'mongoDB', 'react.js']
    },

    {
        name: 'Realtime Chat App',
        image: chatapp,
        deployed_url: '',
        github_url: '',
        category: ['node', 'socket.io', 'react']
    },

    {
        name: 'Tweeter Clone',
        image: tweetme,
        deployed_url: '',
        github_url: '',
        category: ['django', 'react']
    },

    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: '',
        category: ['html_css', 'vanilla']
    },

    {
        name: 'Dev Portfolio',
        image: portfolio,
        deployed_url: '',
        category: ['vanilla']
    },

]

export default dataProjects;