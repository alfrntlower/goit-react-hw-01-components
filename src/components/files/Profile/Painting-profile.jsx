import PropTypes from 'prop-types';
import css from './Profile.module.css';
//import defaultImage from './default.jpg';


export default function PaintingProfile ({
    username,
    tag,
    location,
    avatar,
    stats,
}) {
    return (
        <div class="profile" className={css.profile__card}>
            <div class="description">
                <img
                src={avatar}
                alt="User avatar"
                    class="avatar"
                    className={css.profile__avatar}
                />
                <p class="name" className={css.profile__name}>{username}</p>
                <p class="tag" className={css.profile__tag}>@{tag}</p>
                <p class="location" className={css.profile__location}>{location}</p>
            </div>

            <ul class="stats">
                <li>
                <span class="label">Followers </span>
                <span class="quantity">{stats.followers}</span>
                </li>
                <li>
                <span class="label">Views </span>
                <span class="quantity">{stats.views}</span>
                </li>
                <li>
                <span class="label">Likes </span>
                <span class="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

PaintingProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
  //quantity: PropTypes.number.isRequired,
};

//export default PaintingProfile;