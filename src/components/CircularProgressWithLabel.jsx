import { Component } from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

class CircularProgressWithLabel extends Component {
  render() {
    const { value } = this.props;

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
    );
  }
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default class CircularStatic extends Component {
  state = {
    progress: 100,
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateProgress(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  updateProgress = () => {
    this.setState((prevState, _) => ({
      progress: prevState.progress > 1 ? prevState.progress - 1 : 0
    }))
  }

  render() {
    const {progress} = this.state;

    return (
      <CircularProgressWithLabel value={progress}/>
    );
  }
}