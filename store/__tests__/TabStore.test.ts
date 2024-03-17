import { act, renderHook } from '@testing-library/react-hooks';
import { TabState, useTabStore } from '../Tab.Store';

describe('Tab Store', () => {
    let tabStore: ReturnType<typeof renderHook<unknown, TabState>>;

    beforeEach(() => {
        tabStore = renderHook(() => useTabStore());
    });

    it('adds tab state to store', () => {
        const active = 0;

        act(() => {
            tabStore.result.current.setActive(active);
        });

        expect(tabStore.result.current.active).toEqual(0);

    });

});