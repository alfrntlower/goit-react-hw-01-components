import PropTypes from 'prop-types';
import css from './Friendlist.module.css';


export default function PaintingFriend({friends}) {

    console.log('name', friends);
    return (
        // <li class="item" className={css.friend__item}>
        //     <span class="status">{ friends[0].isOnline}</span>
        //     <img class="avatar" src={friends[0].avatar} alt="User avatar" width="48" />
        //     <p class="name"> {friends[0].name }</p>
        // </li>
        {
            friends.map(friend => (
                <li class="item" className={css.friend__item}>
                    <span class="status">{ friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="name"> {friend.name }</p>
                </li>
        ))}
    )
}

PaintingFriend.prototype = {
    avatar: PropTypes.string,
    name : PropTypes.string,
}
