import React from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
// import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/GridExampleStyle';
class GridExample extends React.Component {
    constructor(props) {
        super(props);
        // Render a footer.
        this._renderFooter = () => {
            return (React.createElement(Text, null, " - Footer - "));
        };
        // If you need scroll to bottom, consider http://bit.ly/2bMQ2BZ
        /* ***********************************************************
        * STEP 1
        * This is an array of objects with the properties you desire
        * Usually this should come from Redux mapStateToProps
        *************************************************************/
        const dataObjects = [
            { title: 'First Title', description: 'First Description' },
            { title: 'Second Title', description: 'Second Description' },
            { title: 'Third Title', description: 'Third Description' },
            { title: 'Fourth Title', description: 'Fourth Description' },
            { title: 'Fifth Title', description: 'Fifth Description' },
            { title: 'Sixth Title', description: 'Sixth Description' },
            { title: 'Seventh Title', description: 'Seventh Description' }
        ];
        /* ***********************************************************
        * STEP 2
        * Teach datasource how to detect if rows are different
        * Make this function fast!  Perhaps something like:
        *   (r1, r2) => r1.id !== r2.id}
        *************************************************************/
        const rowHasChanged = (r1, r2) => r1 !== r2;
        // DataSource configured
        const ds = new ListView.DataSource({ rowHasChanged });
        // Datasource is always in state
        this.state = {
            dataSource: ds.cloneWithRows(dataObjects)
        };
    }
    /* ***********************************************************
    * STEP 3
    * `_renderRow` function -How each cell/row should be rendered
    * It's our best practice to place a single component here:
    *
    * e.g.
      return <MyCustomCell title={rowData.title} description={rowData.description} />
    *************************************************************/
    _renderRow(rowData) {
        return (React.createElement(View, { style: styles.row }, React.createElement(Text, { style: styles.boldLabel }, rowData.title), React.createElement(Text, { style: styles.label }, rowData.description)));
    }
    /* ***********************************************************
    * STEP 4
    * If your datasource is driven by Redux, you'll need to
    * reset it when new data arrives.
    * DO NOT! place `cloneWithRows` inside of render, since render
    * is called very often, and should remain fast!  Just replace
    * state's datasource on newProps.
    *
    * e.g.
      componentWillReceiveProps (newProps) {
        if (newProps.someData) {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
          })
        }
      }
    *************************************************************/
    // Used for friendly AlertMessage
    // returns true if the dataSource is empty
    _noRowData() {
        return this.state.dataSource.getRowCount() === 0;
    }
    render() {
        return (React.createElement(View, { style: styles.container }, React.createElement(ListView, { contentContainerStyle: styles.listContent, dataSource: this.state.dataSource, renderRow: this._renderRow, renderFooter: this._renderFooter, enableEmptySections: true, pageSize: 15 })));
    }
}
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(GridExample);
//# sourceMappingURL=GridExample.js.map 
//# sourceMappingURL=GridExample.js.map