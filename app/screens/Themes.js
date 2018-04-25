import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';
import colors from '../config/colors';

class Themes extends Component {
  handlePressTheme = (color) => {
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(colors.$primaryBlue)}
          selected
          checkmark={false}
          iconBackground={colors.$primaryBlue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(colors.$primaryOrange)}
          selected
          checkmark={false}
          iconBackground={colors.$primaryOrange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(colors.$primaryGreen)}
          selected
          checkmark={false}
          iconBackground={colors.$primaryGreen}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(colors.$primaryPurple)}
          selected
          checkmark={false}
          iconBackground={colors.$primaryPurple}
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default connect()(Themes);
