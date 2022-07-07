import PropTypes from 'prop-types';
import css from './Friendlist.module.css';
import PaintingFriend from './Painting-friend';



function PaintingFriendlist({ friends }) {
    console.log("PFL",friends);

    return (
        <ul class="friend-list">
            <PaintingFriend
                
                key = {friends.id}
                avatar= {friends.avatar}
                isOnline={friends.isOnline}
                name = {friends.name}
            />
        </ul>
    )
}


export default PaintingFriendlist;