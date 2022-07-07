import PropTypes from 'prop-types';
import css from './Friendlist.module.css';


export default function PaintingFriend({ key, avatar, isOnline, name }) {

    console.log('name', name);
    console.log('avatar', avatar);

    return (
        <li class="item">
            <span class="status">STATUS</span>
            <img class="avatar" src=" " alt="User avatar" width="48" />
            <p class="name">NAME</p>
        </li>
    )
}

PaintingFriend.prototype = {
    avatar: PropTypes.string,
    name : PropTypes.string,
}
