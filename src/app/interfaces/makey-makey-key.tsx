import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { ComponentType } from 'react';

export enum FileType {
    Video,
    Audio
}

export interface MakeyMakeyKey {
    name: string;
    keyCode: number;
    iconName: string;
    filePath?: string;
    fileType?: FileType 
}
