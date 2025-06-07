import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Portfolio Website',
        description: 'Personal Full Stack Project',
        bgImage: '/work-1.png',
    },
    {
        title: 'Blogger',
        description: 'Full Stack Blogging Platform',
        bgImage: '/work-2.png',
    },
    {
        title: 'Password Generator',
        description: 'React Utility Tool',
        bgImage: '/work-3.png',
    },
    {
        title: 'Currency Converter',
        description: 'React & API Integration',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Full Stack Web Development', description: 'Building complete web apps from front-end to back-end using Next.js, React.js, Node.js, Express.js, TailwindCSS, MongoDB with clean and scalable code.' },
    { icon: assets.mobile_icon, title: 'Custom Web Tools', description: 'Developing personalized tools like password generator, currency converter, and automation scripts (e.g., Google Apps Script for email workflows).' },
    { icon: assets.ui_icon, title: 'Responsive UI/UX Design', description: 'Creating mobile-friendly, fast-loading, and visually appealing interfaces using TailwindCSS and modern design practices.' },
    { icon: assets.graphics_icon, title: 'API Integration & Backend', description: 'Creating and consuming REST APIs, handling database interactions, and managing user authentication and server-side logic.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Technical Skills', description: 'Next.js, React.js, Node.js, Express.js, JavaScript, TailwindCSS, MongoDB.' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Showcasing expertise through 4 practical builds' }
];

export const toolsData = [
    assets.vscode
];