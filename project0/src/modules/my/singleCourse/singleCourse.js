import { LightningElement,api } from 'lwc';

export default class SingleCourse extends LightningElement {
  
    courses = [
        {
            Id: '0',
            Name: 'HTML',
            Image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            Description: 'Become a modern and confident HTML developer, no prior knowledge needed!'
        },
        {
            Id: '1',
            Name: 'CSS',
            Image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            Description: 'Become a modern and confident CSS developer, no prior knowledge needed!'
        },
        {
            Id: '2',
            Name: 'Javascript Programming',
            Image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            Description: 'Become a modern and confident Javascript developer, no prior knowledge needed!'
        },
        {
            Id: '3',
            Name: 'Vue',
            Image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
            Description: 'Become a modern and confident Vue developer, Html, Css and Javascript knowledge needed.'
        },
        {
            Id: '4',
            Name: 'React',
            Image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            Description: 'Become a modern and confident React developer, Html, Css and Javascript knowledge needed.'
        },
        {
            Id: '5',
            Name: 'Angular',
            Image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
            Description: 'Become a modern and confident Angular developer. Html, Css and Javascript knowledge needed.'
        },
    ]
}
