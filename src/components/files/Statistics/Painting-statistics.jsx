import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function PaintingStatistics ({stats}) {
    return (
        <section class="statistics" className={css.statistics__card}>
            <h2 class="title" className={css.statistics__header}>Upload stats</h2>

            <ul class="stat-list">
                <li class="item">
                    <span class="label">{stats[0].label}</span>
                    <span class="percentage"> { stats[0].percentage } %</span>
                </li>
                <li class="item">
                    <span class="label">{stats[1].label}</span>
                    <span class="percentage">{ stats[1].percentage } %</span>
                </li>
                <li class="item">
                    <span class="label">{stats[2].label}</span>
                    <span class="percentage">{ stats[2].percentage } %</span>
                </li>
                <li class="item">
                    <span class="label">{stats[3].label}</span>
                    <span class="percentage">{ stats[3].percentage } %</span>
                </li>
            </ul>
        </section>
    )
}

PaintingStatistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
