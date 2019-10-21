import { checkForStorage } from '../index';

global.localStorage = {
	setItem: jest.fn(),
	removeItem: jest.fn(),
};
global.sessionStorage = {
	setItem: jest.fn(),
	removeItem: jest.fn(),
};

describe('Utilities: checkForStorage', () => {
	const { localStorage, sessionStorage } = window;

	beforeAll(() => {
		delete window.localStorage;
		delete window.sessionStorage;
		window.localStorage = {
			setItem: jest.fn(),
			removeItem: jest.fn(),
		};
		window.sessionStorage = {
			setItem: jest.fn(),
			removeItem: jest.fn(),
		};
	});

	afterAll(() => {
		window.localStorage = localStorage;
		window.sessionStorage = sessionStorage;
	});

	it('Should check for localStorage', () => {
		const result = checkForStorage('localStorage');

		expect(window.localStorage.setItem).toHaveBeenCalled();
		expect(window.localStorage.removeItem).toHaveBeenCalled();
		expect(result).toBeTrue();
	});

	it('Should check for sessionStorage', () => {
		const result = checkForStorage('sessionStorage');

		expect(window.sessionStorage.setItem).toHaveBeenCalled();
		expect(window.sessionStorage.removeItem).toHaveBeenCalled();
		expect(result).toBeTrue();
	});
});
