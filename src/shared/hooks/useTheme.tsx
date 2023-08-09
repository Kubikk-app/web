import { useAppSelector } from '@/app/typedRxHooks';

export const useTheme = () => {
  const theme = useAppSelector((state) => state.theme);
  return theme;
};
