import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  Animated,
} from 'react-native';
import color from 'color';

import styles from './styles';

class InputWithButton extends Component {
  constructor(props) {
    super(props);

    this.backgroundColor = new Animated.Value(0);
  }

  componentDidUpdate() {
    // If the value is a number then we should animate
    if (parseFloat(this.props.value)) {
      Animated.sequence([
        Animated.timing(this.backgroundColor, {
          toValue: 1,
        }),
        Animated.timing(this.backgroundColor, {
          toValue: 0,
        }),
      ]).start();
    }
  }

  render() {
    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
      styles.$buttonBackgroundColorModifier,
    );

    const containerStyles = [styles.container];
    if (this.props.editable === false) {
      containerStyles.push({
        backgroundColor: this.backgroundColor.interpolate({
          inputRange: [0, 1],
          outputRange: [styles.$inputBackgroundBase, styles.$inputBackgroundAlt],
        }),
      });
    }

    const buttonStyles = [styles.buttonText];
    if (this.props.textColor) {
      buttonStyles.push({ color: this.props.textColor });
    }

    return (
      <Animated.View style={containerStyles}>
        <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.buttonContainer}
          underlayColor={underlayColor}
        >
          <Text style={buttonStyles}>
            {this.props.buttonText}
          </Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          {...this.props}
        />
      </Animated.View>
    );
  }
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
  value: PropTypes.string,
};

export default InputWithButton;
