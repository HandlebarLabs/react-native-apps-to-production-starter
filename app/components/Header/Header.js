import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({ onPress, isConnected, onWarningPress }) =>
  (<View style={styles.container}>
    {!isConnected
      ? <TouchableOpacity onPress={onWarningPress} style={styles.button}>
        <Image
          resizeMode="contain"
          source={require('./images/warning.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      : null}
    <TouchableOpacity onPress={onPress} style={[styles.button, styles.buttonRight]}>
      <Image resizeMode="contain" source={require('./images/gear.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>);

Header.propTypes = {
  onPress: PropTypes.func,
  isConnected: PropTypes.bool,
  onWarningPress: PropTypes.func,
};

export default Header;
