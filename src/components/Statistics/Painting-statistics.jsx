import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function PaintingStatistics ({header,stats}) {
    return (
        <section class="statistics" className={css.statistics__card}>
        
            {header && <h2 className={css.statistics__header}>{header}</h2>}
        
            <ul class="stat-list" className={css.stat_list}>
                <>
                    {
                        stats.map(stat => (
                             <li class="item" className={css.stat_item}>
                                <span class="label">{stat.label}</span>
                                <span class="percentage"> { stat.percentage } %</span>
                            </li>
                        ))
                   }
                </>
            </ul>
        </section>
    )
}

PaintingStatistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
