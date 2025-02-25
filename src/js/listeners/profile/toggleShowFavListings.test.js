import { toggleShowFavListings } from './toggleShowFavListings.js';

describe('toggleShowFavListings', () => {
    beforeEach(() => {
        document.body.innerHTML = `<section id="favoriteListings"></section>`;
    });

    afterEach(() => {
        localStorage.clear();
    });

    it('hides the favorite listings section when role is "client"', () => {
        localStorage.setItem("role", '"client"');
        toggleShowFavListings();
        const section = document.getElementById('favoriteListings');
        expect(section.style.display).toBe('none');
    });

    it('shows the favorite listings section when role is not "client"', () => {
        localStorage.setItem("role", '"admin"');
        toggleShowFavListings();
        const section = document.getElementById('favoriteListings');
        expect(section.style.display).not.toBe('none');
    });

    it('does nothing if the favoriteListings section is not found', () => {
        document.body.innerHTML = '';
        expect(() => toggleShowFavListings()).not.toThrow();
    });

    it('handles role values without quotes and in different cases', () => {
        localStorage.setItem("role", 'CLIENT');
        toggleShowFavListings();
        const section = document.getElementById('favoriteListings');
        expect(section.style.display).toBe('none');
    });
});
