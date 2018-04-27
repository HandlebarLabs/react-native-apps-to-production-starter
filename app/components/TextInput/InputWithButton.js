import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight, Text, Animated } from 'react-native';

import styles, { $inputBackgroundBase, $inputBackgroundAlt } from './styles';
import colors from '../../config/colors';

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
    const containerStyles = [styles.container];
    if (this.props.editable === false) {
      containerStyles.push({
        backgroundColor: this.backgroundColor.interpolate({
          inputRange: [0, 1],
          outputRange: [$inputBackgroundBase, $inputBackgroundAlt],
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
          underlayColor={colors.$lightGray}
        >
          <Text style={buttonStyles}>{this.props.buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TextInput style={styles.input} underlineColorAndroid="transparent" {...this.props} />
      </Animated.View>
    );
  }
}

export default InputWithButton;
