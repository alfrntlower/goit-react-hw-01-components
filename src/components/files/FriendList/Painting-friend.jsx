import PropTypes from 'prop-types';
//import css from './Friendlist.module.css';


export default function PaintingFriend() {

    console.log('name', );
    return (
        <li class="item">
            <span class="status"></span>
            <img class="avatar" src="" alt="User avatar" width="48" />
            <p class="name"></p>
        </li>
    )
}

PaintingFriend.prototype = {
    avatar: PropTypes.string,
    name : PropTypes.string,
}
