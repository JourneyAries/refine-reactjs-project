import { MainContextProvider } from './useMain';

export const AllProvider = ({ children }) => {
	return <MainContextProvider>{children}</MainContextProvider>;
};
