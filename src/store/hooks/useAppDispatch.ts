import {useDispatch} from 'react-redux';
import {AppDispatch} from '../index.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
