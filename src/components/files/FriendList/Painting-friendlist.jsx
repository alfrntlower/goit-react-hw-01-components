// import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import PaintingFriend from './Painting-friend';



export default function PaintingFriendlist({ friends }) {
    console.log("PFL",friends);

    return (
        <ul class="friend-list" className={css.friends__list}>
            <PaintingFriend
                
                // key = {friends.id}
                // avatar= {friends.avatar}
                // isOnline={friends.isOnline}
                // name={friends.name}
                
                friends = {friends}
            />
        </ul>
    )
}

