import React, {PureComponent} from "react";

const withPlacesList = (Component) => {
  return class PlacesList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        active: null,
      };
    }

    render() {
      const {active} = this.state;

      return (
        <Component
          {...this.props}
          active={active}
        />
      );
    }
  };
};

export default withPlacesList;
