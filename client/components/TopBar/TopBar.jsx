import React from 'react';

TopBar = class TopBar extends React.Component {

  _socialButton(socialApp) {
    return (
      <a className="item" href={Meteor.settings.public.social[socialApp]} target="_blank" key={`${socialApp}-btn`}>
        <i className={`large ${socialApp} ${socialApp}-color icon`}></i>
      </a>
    );
  }

  _renderSocialButtons() {
    const socialApps = Object.keys(Meteor.settings.public.social);
    return socialApps.map((app) => this._socialButton(app));
  }

  _logInLogOutBtn() {
    if (this.props.user) {
      return (
        <a className="item" onClick={(e) => this._logout(e)}>
          <i className="large green power icon"></i>
        </a>
      );
    } else {
      return (
        <a className="item" href="/login">
          <i className="large gray power icon"></i>
        </a>
      );
    }
  }

  _logout(event) {
    event.preventDefault();
    return Meteor.logout(() => FlowRouter.go('/'));
  }

  _renderAdminMenu() {
    if (this.props.isAdmin()) {
      return [
        (<div className="divider" key="admin-div"></div>),
        (<div className="header" key="admin-header">Admin</div>),
        (<a className="item" href="/editor" key="admin-editor"><i className="large green edit icon"></i> Editor</a>),
        (<a className="item" href="/settings" key="admin-settings"><i className="large dark-red settings icon"></i> Settings</a>),
      ];
    } else {
      return null;
    }
  }

  _initDropDownMenus() {
    $(this.refs.topbar).find('.ui.dropdown').dropdown();
  }

  componentDidMount() {
    this._initDropDownMenus();
  }

  componentDidUpdate(prevProps, prevState) {
    this._initDropDownMenus();
  }

  render() {
    return (
      <div className="ui fixed icon menu top-bar" ref="topbar">

        <div className="ui dropdown item" ref="menuDropdown">
          <i className="large green content icon"></i>

          <div className="menu topbar-dropdown-menu">
            <a className="item" href="/">
              <img className="ui iamage" src="/img/logo-512.png"/>
              Home
            </a>
            <a className="item" href="/archive">
              <i className="blue archive icon"></i>
              Archive
            </a>
            <a className="item" href="/contact">
              <i className="red tag icon"></i>
              Tags
            </a>
            <a className="item" href="/resume">
              <i className="orange book icon"></i>
              CV
            </a>
            <a className="item" href="/info">
              <i className="violet cubes icon"></i>
              Cool Stuff
            </a>
            { this._renderAdminMenu() }
          </div>
        </div>

        { this._renderSocialButtons() }

        <div className="right menu">
          {this._logInLogOutBtn()}
        </div>
      </div>
    );
  }
}
