import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MakeyMakeyKeyList } from './makey-makey-key-list';
import { MakeyMakeyKey } from './interfaces/makey-makey-key';

export interface AppState {
    keyList: MakeyMakeyKey[]
}

export class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            keyList: [{
                iconName: 'keyboard_arrow_left',
                name: 'Left',
                keyCode: 45
            },{
                iconName: 'keyboard_arrow_right',
                name: 'Right',
                keyCode: 45
            }]
        }
    }
    render() {
        return <React.Fragment>
        <CssBaseline />
        <MakeyMakeyKeyList keyList={this.state.keyList} />
      </React.Fragment>
    }
}
