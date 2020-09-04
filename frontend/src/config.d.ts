import {ApplicationState} from '@store/configs'
declare module 'react-redux' {
    interface DefaultRootState extends ApplicationState {}
}