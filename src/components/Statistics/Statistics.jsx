import PropTypes from 'prop-types';

import {
  StatisticsBoard,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './statistics.styled.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsBoard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsBoard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
