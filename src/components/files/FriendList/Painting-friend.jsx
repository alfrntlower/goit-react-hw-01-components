import PropTypes from 'prop-types';
import css from './Friendlist.module.css';


function PaintingFriend(key, avatar, isOnline, name) {

    console.log('name', name);
    return (
        <li class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
}

PaintingFriend.prototype = {
    avatar: PropTypes.string,
    name : PropTypes.string,
}



export default PaintingFriend;