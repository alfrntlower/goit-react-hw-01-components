// import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import PaintingFriend from './Painting-friend';


export default function PaintingFriendlist({ friends }) {
    return (
        <ul class="friend-list" className={css.friends__list}>
            <PaintingFriend
                
                friends = {friends}
            />
        </ul>
    )
}

