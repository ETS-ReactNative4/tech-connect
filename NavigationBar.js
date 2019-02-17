import React, { Component } from 'react'
import { View } from 'react-native'
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'

export default class NavigationBar extends Component {
  
  renderTab = ({ tab, isActive }) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={this.renderIcon}
      />
    )
  }

  renderIcon = ({ isActive }) => {
    return <View />
  }
  
  render() {
    const tabs = [
      {
        key: 'home',
        icon: 'gamepad-variant',
        label: 'Home',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'edit',
        icon: 'gamepad-variant',
        label: 'Edit Profile',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'connections',
        icon: 'gamepad-variant',
        label: 'Connections',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'messages',
        icon: 'gamepad-variant',
        label: 'Messages',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      },
      {
        key: 'schedule',
        icon: 'gamepad-variant',
        label: 'Schedule',
        barColor: '#388E3C',
        pressColor: 'rgba(255, 255, 255, 0.16)'
      }
    ]
    return (
      <View>
        <BottomNavigation
          renderTab={this.renderTab}
          tabs={tabs}
        />
      </View>
    )
  }
}