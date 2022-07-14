import PropTypes from 'prop-types';
import css from './Friendlist.module.css';


export default function PaintingFriend({friends}) {
    return (
    <>
        {
            friends.map(friend => (
                <li class="item" className={css.friend__item}>
                    {friend.isOnline ? (
                        <span class="status">🟢</span>
                    ) : (
                        <span class="status">🔴</span>
                    )
                    }
                    <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="name"> {friend.name }</p>
                </li>
            ))}
    </>
    )
}

PaintingFriend.prototype = {
    avatar: PropTypes.string,
    name : PropTypes.string,
}
