import * as React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider, Icon} from '@material-ui/core';
import {Inbox } from '@material-ui/icons';
import { MakeyMakeyKey } from './interfaces/makey-makey-key';

const ListItemLink = (props: any) => 
    <ListItem button component="a" {...props} />;

export interface MakeyMakeyKeyListProps {
  keyList: MakeyMakeyKey[]
}

export const MakeyMakeyKeyList = (props: MakeyMakeyKeyListProps) => 
<div className="test">
<List component="nav">
  {props.keyList.map(key =>
    <ListItem button key={key.keyCode.toString()}>
      <ListItemIcon>
        <Icon>{key.iconName}</Icon>
      </ListItemIcon>
      <ListItemText primary={key.name} />
    </ListItem>
  )}
</List>
</div>;