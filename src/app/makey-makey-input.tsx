import * as React from 'react';
import { MakeyMakeyKey } from './interfaces/makey-makey-key';
import { isKey } from './keys/is-key';
import { allKeys } from './keys/all-keys';

export interface MakeyMakeyInputProps {
    onInput: (key: MakeyMakeyKey) => void
}
function keyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    e.preventDefault();
}
function keyDown(props: MakeyMakeyInputProps, e: React.KeyboardEvent<HTMLDivElement>) {
    e.stopPropagation();
    if (isKey(e.nativeEvent.code)) {
        props.onInput(allKeys.find(k => e.nativeEvent.code === k.keyCode));
    }
}

export const MakeyMakeyInput = (props: MakeyMakeyInputProps) => 
    <div className="makey-makey-input" onKeyPress={keyPress} 
            onKeyDown={(e) => keyDown(props, e)} contentEditable={true}>
    </div>;
