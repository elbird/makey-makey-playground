import * as React from 'react';
import { CssBaseline } from '@material-ui/core';
import { MakeyMakeyKeyList } from './makey-makey-key-list';
import { MakeyMakeyKey } from './interfaces/makey-makey-key';
import { MakeyMakeyInput } from './makey-makey-input';
import { allKeys } from './keys/all-keys';

export interface AppState {
    keyList: MakeyMakeyKey[],
    lastInput?: MakeyMakeyKey
}

export class App extends React.Component<any, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            keyList: allKeys
        }
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(key: MakeyMakeyKey) {
        this.setState({
            lastInput: key
        });
        console.log(this.state.lastInput);
    }
    render() {
        return <React.Fragment>
        <CssBaseline />
        <MakeyMakeyKeyList keyList={this.state.keyList} />
        <MakeyMakeyInput onInput={this.handleInput} />
      </React.Fragment>
    }
}
