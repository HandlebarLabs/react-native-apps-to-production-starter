import React from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Icon = ({ visible, checkmark, iconBackground }) => {
  if (visible) {
    const iconStyles = [styles.icon];
    if (visible) {
      iconStyles.push(styles.iconVisible);
    }
    if (iconBackground) {
      iconStyles.push({ backgroundColor: iconBackground });
    }
    return (
      <View style={iconStyles}>
        {checkmark ? (
          <Image
            source={require('./images/check.png')}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        ) : null}
      </View>
    );
  }

  return <View style={styles.icon} />;
};

export default Icon;
