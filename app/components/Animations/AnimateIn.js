import React, { Component, PropTypes } from 'react';
import { Animated, Dimensions } from 'react-native';

const WINDOW_DIMENSIONS = Dimensions.get('window');

class AnimateIn extends Component {
  static propTypes = {
    children: PropTypes.any,
    delay: PropTypes.number,
    duration: PropTypes.number,
    type: PropTypes.oneOf(['fromBottom', 'fromTop', 'fadeIn']),
  };

  constructor(props) {
    super(props);

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      delay: this.props.delay || 0,
      duration: this.props.duration || 500,
    }).start();
  }

  render() {
    const { type } = this.props;
    let styles = {};
    if (type === 'fadeIn') {
      styles = {
        opacity: this.animatedValue,
        transform: [{ scale: this.animatedValue }],
      };
    } else if (type === 'fromTop') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [-WINDOW_DIMENSIONS.height, 0],
            }),
          },
        ],
      };
    } else if (type === 'fromBottom') {
      styles = {
        opacity: this.animatedValue,
        transform: [
          {
            translateY: this.animatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: [WINDOW_DIMENSIONS.height, 0],
            }),
          },
        ],
      };
    }

    return (
      <Animated.View style={[{ width: '100%', alignSelf: 'center' }, styles]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimateIn;
